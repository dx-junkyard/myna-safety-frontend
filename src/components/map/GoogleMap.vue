<script lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { defineComponent, ref, computed, onBeforeMount, onMounted } from 'vue'
import { useStore } from '@/store'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import type { UserReportModel } from '@/types/typescript-axios'
import MapOutline from '@/components/map/MapOutline.vue'
import ReportStatusBudge from '@/components/common/ReportStatusBudge.vue'

export default defineComponent({
  data: function () {
    return {
      map: null,
      google: null
    }
  },
  setup() {
    const store = useStore()
    const changeMapOutlineStatus  = () => store.commit('userReports/changeMapOutlineStatus')

    // バックエンドから申告の情報取得
    const userReport = computed(() => store.getters['userReports/getAllList'])
    onBeforeMount(async () => {
      await store.dispatch('userReports/getAllList')
      createMapLoader()
    })

    const googleMapEl = ref()

    // 参考URL: https://qiita.com/shiba_mitue/items/c0795667ca9dd06b9140
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAP_API,
      version: 'frozen',
      libraries: ['places', 'drawing', 'geometry', 'visualization'],
      language: 'ja'
    })

    const GOOGLE = ref()
    const createMapLoader = () => {
      loader
        .load()
        .then((google) => {
          // 地図の初期化
          GOOGLE.value = google
          initMap()
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          initMarker()
        })
    }

    // 地図の初期化
    const MAP = ref()
    const initMap = () => {
      const mapOptions = {
        center: {
          lat: 35.6769883,
          lng: 139.7588499
        },
        zoom: 14
      }
      MAP.value = new GOOGLE.value.maps.Map(googleMapEl.value, mapOptions)
    }

    // マーカーに関する設定
    const markerClusterer = ref()
    const initMarker = () => {
      const markers = [] as any[]
      markerClusterer.value = new MarkerClusterer({ markers, map: MAP.value })

      userReport.value.forEach((element: UserReportModel) => {
        // マーカー作成
        const marker = new GOOGLE.value.maps.Marker({
          position: { lat: element.location.latitude, lng: element.location.longitude },
          title: element.content,
          icon: element.image_url
        })

        const infoWindow = new GOOGLE.value.maps.InfoWindow()
        // クリックイベントを追加
        marker.addListener('click', () => {
          changeMapOutlineStatus()
          infoWindow.close()

          const p_node = document.createElement('p')

          const image_node = document.createElement('img')
          image_node.width = 24
          image_node.height = 24
          image_node.src = element.image_url!

          var text_node = document.createTextNode(element.content)

          p_node.appendChild(image_node)
          p_node.appendChild(text_node)

          infoWindow.setContent('テスト')
          infoWindow.open(marker.getMap(), marker)
        })
        markerClusterer.value.addMarker(marker)
      })
    }

    return { googleMapEl }
  },
  components: {
    MapOutline,
    ReportStatusBudge,
  },
})
</script>

<template>
    <div>
        <div ref="googleMapEl" class="google-map" />
        <MapOutline />
    </div>
</template>

<style>
.google-map {
  height: 95vh;
  width: 100%;
}
</style>
