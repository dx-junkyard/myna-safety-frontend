<template>
  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="bg-white inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800" style="background: bottom;">
        <a href="/" class="flex bg-white rounded-lg p-2 items-center pl-2.5 mb-5">
            <img src="@/assets/image/logo_color.png" class="h-6 ml-4 mr-2 sm:h-7" alt="Flowbite Logo" />
            <span class="logo self-center text-3xl whitespace-nowrap dark:text-white">
            <span class="text-yellow">マイナ</span>
            <span class="test-darkblue">セーフティ</span>
        </span>
      </a>
        <ul class="space-y-2 font-medium">
            <li>
                <a href="/" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <path class="st0" d="M433.198,202.846l-69.291-69.236l-54.996-54.926l-52.823-53.018L0,281.562l37.928,37.905l34.026-33.995v200.86
                                h150.257h67.577h150.257V285.442l34.026,34.026L512,281.562L433.198,202.846z M408.139,454.426H299.595V335.265h-87.191v119.161
                                H103.862V253.589l152.227-152.103l152.05,152.049V454.426z"></path>
                        </g>
                    </svg>
                <span class="flex-1 ml-3 font-semibold whitespace-nowrap">タイムライン</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>
            <li>
                <a href="/map" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" version="1.1" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <path class="st0" d="M291.789,390.688L279.727,380.5c-8.844,10.531-13.203,22.906-15.344,34.125l15.5,2.938
                                C281.68,408.125,285.289,398.375,291.789,390.688z"></path>
                            <path class="st0" d="M333.648,366.781l-9.297-12.75c-4.281,3.125-9.484,5.781-15.875,7.781c-5.141,1.594-9.781,3.656-13.938,6.125
                                l8.078,13.563c3.047-1.813,6.531-3.391,10.516-4.625C321.07,374.438,327.898,370.969,333.648,366.781z"></path>
                            <path class="st0" d="M343.242,316.438c-0.406,9.297-3.031,19.219-8.891,27.469L347.242,353
                                c7.969-11.313,11.25-24.188,11.766-35.906L343.242,316.438z"></path>
                            <path class="st0" d="M167.398,424.656c-2.313-12.188-7.219-22.719-13.453-31.625l-12.922,9.047v0.016
                                c5.125,7.313,9,15.688,10.875,25.5L167.398,424.656z"></path>
                            <path class="st0" d="M116.148,360.203l-7.703,13.766c7.797,4.375,16.141,10.094,23.391,17.281l11.109-11.219
                                C134.367,371.563,124.883,365.094,116.148,360.203z"></path>
                            <path class="st0" d="M511.805,477.844l-8.703-19.125L412.555,259.25H286.289c-1.703,3-3.25,5.844-5.047,8.906
                                c-4.859,8.313-9.359,15.844-13.531,22.656h69.859l-0.125,0.125c1.172,1.125,3.344,5.219,4.516,10.594l15.375-3.5
                                c-0.609-2.563-1.359-4.938-2.203-7.219h37.094l72.016,158.641H265.758l13.203-2.047l-0.016-0.125
                                c-0.109-0.844-0.703-5.344-0.703-11.719c0-0.813,0.016-1.641,0.031-2.5l-15.766-0.359c-0.031,0.984-0.031,1.922-0.031,2.859
                                c0,7.297,0.656,12.5,0.844,13.891h-94.906c0.25-2.578,0.422-5.109,0.453-7.578l-15.781-0.219c-0.031,2.5-0.234,5.125-0.531,7.797
                                H47.758l38.719-85.297c2.313,0.781,5.266,1.875,8.688,3.313l6.172-14.5c-3.156-1.344-5.938-2.406-8.313-3.25l26.75-58.906h38.844
                                c-4.156-6.813-8.656-14.344-13.531-22.656c-1.797-3.063-3.344-5.906-5.047-8.906H99.43L0.195,477.844
                                c-0.313,0.703-0.25,1.5,0.156,2.156c0.422,0.625,1.125,1,1.891,1h507.516c0.766,0,1.469-0.375,1.891-1
                                C512.055,479.344,512.117,478.547,511.805,477.844z"></path>
                            <path class="st0" d="M213.164,340.656c5,0,105.156-146.406,105.156-204.5C318.32,78.094,271.242,31,213.164,31
                                c-58.094,0-105.172,47.094-105.172,105.156C107.992,194.25,208.164,340.656,213.164,340.656z M172.945,136.156
                                c0-22.219,18.016-40.219,40.219-40.219c22.219,0,40.234,18,40.234,40.219s-18.016,40.234-40.234,40.234
                                C190.961,176.391,172.945,158.375,172.945,136.156z"></path>
                        </g>
                    </svg>
                    <span class="flex-1 ml-3 font-semibold whitespace-nowrap">地図</span>
                </a>
            </li>
            <!--<li>
                <a href="/about" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span class="ml-3 font-semibold ">Dashboard</span>
                </a>
            </li>-->
            <li>
                <a href="/list" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                <span class="flex-1 ml-3 font-semibold whitespace-nowrap">一覧（PC専用）</span>
                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">2</span>
                </a>
            </li>
            <!--<li>
                <a href="#" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex bg-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#5187a3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </a>
            </li>-->
        </ul>
    </div>
    </aside>
</template>

<style>
.logo {
    font-family: 'Monomaniac One', sans-serif;
}

.text-yellow {
    color:#fdd23c;
}

.test-darkblue {
    color: #5187a3;
}
</style>