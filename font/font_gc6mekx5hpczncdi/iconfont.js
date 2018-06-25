;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gupiaozengfavsmeigushouyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M845.632 310.72 543.936 183.424C532.416 178.56 520.192 177.536 512 177.536c-8.192 0-20.416 1.024-31.872 5.888l-301.76 127.36C162.048 317.632 152.32 330.752 152.256 345.856c0 15.104 9.728 28.224 26.112 35.136l301.76 127.36C491.648 513.216 503.808 514.24 512 514.24c8.192 0 20.352-1.024 31.872-5.824l301.824-127.36c16.32-6.912 26.048-20.032 26.048-35.136C871.68 330.752 862.016 317.632 845.632 310.72zM521.664 455.616C520.512 456.064 517.056 456.96 512 456.96c-5.12 0-8.512-0.896-9.6-1.344L242.432 345.92 502.464 236.16C503.552 235.712 506.944 234.816 512 234.816S520.448 235.712 521.6 236.16l260.032 109.696L521.664 455.616z"  ></path>' +
    '' +
    '<path d="M521.6 787.776c-4.288 1.792-14.848 1.856-19.2 0l-301.76-127.36-22.272 52.8 301.76 127.296C489.344 844.416 500.672 846.4 512 846.4c11.328 0 22.656-1.92 31.872-5.888l301.76-127.296-22.272-52.8L521.6 787.776z"  ></path>' +
    '' +
    '<path d="M521.536 676.992c-4.288 1.856-14.784 1.856-19.136 0L200.64 549.696 178.368 602.496l301.696 127.232C489.344 733.696 500.672 735.616 512 735.616c11.328 0 22.656-1.92 31.872-5.824l301.76-127.296-22.272-52.8L521.536 676.992z"  ></path>' +
    '' +
    '<path d="M521.664 566.336c-4.352 1.792-14.976 1.792-19.264 0l-301.76-127.36L178.368 491.776l301.76 127.36C489.344 622.976 500.672 624.96 512 624.96s22.656-1.92 31.936-5.824l301.76-127.36-22.272-52.8L521.664 566.336z"  ></path>' +
    '' +
    '<path d="M823.872 0 200.128 0C89.792 0 0 84.16 0 187.584l0 648.768C0 939.776 89.792 1024 200.128 1024l623.744 0C934.272 1024 1024 939.776 1024 836.352L1024 187.584C1024 84.16 934.272 0 823.872 0zM952.384 836.352c0 63.936-57.6 116.032-128.512 116.032L200.128 952.384c-70.848 0-128.512-52.032-128.512-116.032L71.616 187.584c0-64 57.664-116.032 128.512-116.032l623.744 0c70.848 0 128.512 52.032 128.512 116.032L952.384 836.352z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caijizutai" viewBox="0 0 1366 1024">' +
    '' +
    '<path d="M1014.376107 725.746347l-74.569387 0c0-198.539947-183.719253-80.51712-275.879253-245.95968-91.65312 164.52096-275.887787 48.191147-275.887787 245.95968l-74.56256 0c0-331.385173 313.1648-72.04352 313.1648-427.492693l74.560853 0C701.2096 653.94176 1014.376107 393.915733 1014.376107 725.746347L1014.376107 725.746347zM763.344213 74.560853l0 99.418453L564.509013 173.979307 564.509013 74.560853 763.344213 74.560853 763.344213 74.560853zM837.906773 0 489.946453 0l0 248.54016 347.96032 0L837.906773 0 837.906773 0zM450.179413 850.020693l0 99.416747L251.344213 949.43744l0-99.416747L450.179413 850.020693 450.179413 850.020693zM524.741973 775.451307 176.78336 775.451307 176.78336 1024l347.958613 0L524.741973 775.451307 524.741973 775.451307zM1076.509013 850.020693l0 99.416747L877.673813 949.43744l0-99.416747L1076.509013 850.020693 1076.509013 850.020693zM1151.069867 775.451307 803.111253 775.451307 803.111253 1024l347.958613 0L1151.069867 775.451307 1151.069867 775.451307zM1151.069867 775.451307"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-34" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 182.044444c-182.226489 0-329.955556 147.729067-329.955556 329.955556s147.729067 329.955556 329.955556 329.955556 329.955556-147.729067 329.955556-329.955556S694.226489 182.044444 512 182.044444zM512 787.751822c-152.291556 0-275.751822-123.460267-275.751822-275.751822S359.708444 236.248178 512 236.248178 787.751822 359.708444 787.751822 512 664.291556 787.751822 512 787.751822zM617.005511 410.612622c3.9936 11.912533-2.446222 24.814933-14.370133 28.785778-11.935289 3.970844-24.826311-2.446222-28.785778-14.370133-5.415822-16.156444-24.849067-35.032178-61.860978-35.032178-30.640356 0-48.810667 20.605156-50.926933 40.948622-2.594133 25.031111 18.716444 45.374578 55.591822 53.088711 73.773511 15.439644 95.414044 64.773689 91.522844 102.331733-4.061867 39.298844-34.133333 70.360178-73.432178 79.166578L534.744178 694.044444c0 12.561067-10.194489 22.755556-22.755556 22.755556s-22.755556-10.194489-22.755556-22.755556l0-27.716267c-46.876444-7.543467-73.398044-37.842489-82.249956-64.318578-3.9936-11.912533 2.446222-24.814933 14.370133-28.785778 11.901156-4.016356 24.814933 2.446222 28.785778 14.370133 5.415822 16.156444 24.849067 35.032178 61.860978 35.032178 30.640356 0 48.810667-20.605156 50.926933-40.948622 2.594133-25.031111-18.716444-45.374578-55.591822-53.088711-73.773511-15.439644-95.414044-64.773689-91.522844-102.331733 4.061867-39.298844 34.133333-70.360178 73.432178-79.166578L489.244444 318.577778c0-12.561067 10.194489-22.755556 22.755556-22.755556s22.755556 10.194489 22.755556 22.755556l0 27.716267C581.632 353.837511 608.1536 384.136533 617.005511 410.612622z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuzhijiagou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M961.5 700.5 889 700.5 889 512c0-24-19.5-43.5-43.5-43.5L541 468.5l0-145 72.5 0c24 0 43.5-19.5 43.5-43.5L657 77c0-24-19.5-43.5-43.5-43.5l-203 0C386.5 33.5 367 53 367 77l0 203c0 24 19.5 43.5 43.5 43.5L483 323.5l0 145L178.5 468.5c-24 0-43.5 19.5-43.5 43.5l0 188.5L62.5 700.5C38.5 700.5 19 720 19 744l0 203c0 24 19.5 43.5 43.5 43.5l203 0c24 0 43.5-19.5 43.5-43.5L309 744c0-24-19.5-43.5-43.5-43.5L193 700.5l0-174 290 0 0 174-72.5 0c-24 0-43.5 19.5-43.5 43.5l0 203c0 24 19.5 43.5 43.5 43.5l203 0c24 0 43.5-19.5 43.5-43.5L657 744c0-24-19.5-43.5-43.5-43.5L541 700.5l0-174 290 0 0 174-72.5 0c-24 0-43.5 19.5-43.5 43.5l0 203c0 24 19.5 43.5 43.5 43.5l203 0c24 0 43.5-19.5 43.5-43.5L1005 744C1005 720 985.5 700.5 961.5 700.5zM425 91.5l174 0 0 174L425 265.5 425 91.5zM251 758.5l0 174L77 932.5l0-174L251 758.5zM599 932.5 425 932.5l0-174 174 0L599 932.5zM947 932.5 773 932.5l0-174 174 0L947 932.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-meiyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M508.258 62.162c-251.137 0-454.765 203.622-454.765 454.765s203.622 454.765 454.765 454.765 454.765-203.622 454.765-454.765c0-251.137-203.622-454.765-454.765-454.765zM546.37 769.109v85.107h-81.972v-78.317c-55.344-2.61-109.121-18.274-140.449-35.503l24.54-96.59c34.462 18.8 83.538 36.549 137.317 36.549 48.031 0 79.886-18.8 79.886-51.166 0-31.327-26.627-51.166-88.237-72.052-88.237-29.763-148.804-71.010-148.804-151.413 0-73.618 51.166-130.529 139.405-147.236v-78.317h80.931v72.574c54.302 1.566 91.892 14.097 120.609 27.148l-24.54 93.457c-20.885-9.921-59.523-29.235-119.041-29.235-53.776 0-71.010 24.017-71.010 46.989 0 26.627 28.714 44.902 100.249 69.964 98.157 34.983 137.317 80.406 137.317 155.59 0 73.618-51.166 136.799-146.19 152.459z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zidingyizhibiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M923.280064 478.32197c-1.797949-0.225127-3.595898-0.561795-5.449106-0.561795-1.910513 0-3.651157 0.336668-5.505387 0.561795L815.640532 478.32197l-3.932566 0-21.572318-61.290925L751.428068 307.08805c-3.707438-21.741163-22.584368-38.369889-45.39284-38.369889-16.292058 0-30.504758 8.483208-38.763862 21.23565-3.145643 4.88731-4.999874 10.561543-6.179746 16.516162-0.056282 0.056282-0.336668 0.281409-0.336668 0.336668l-34.325783 147.694807-4.88731 21.404496-33.482579 145.503908-35.729759-161.795966-4.101411-18.59552-60.055794-272.130887c0-0.561795 0.168846-1.12359 0.168846-1.685385 0-25.504884-20.673855-46.178739-46.235021-46.178739-23.482831 0-42.640146 17.584494-45.561685 40.280402l-57.69605 287.692305-0.730641 3.707438-19.381419 100.336196c-1.236154-2.527566-2.64013-4.88731-4.269233-7.078209l-21.966291-49.774637c-2.752694-9.999748-13.201673-18.482957-24.157189-18.482957l-154.716734 0.505513c-1.460258-0.112564-2.921539-0.449231-4.494361-0.449231-1.629103 0-3.201925 0.336668-4.774747 0.505513-17.86488 1.854231-32.584116 13.707187-38.482453 29.999245-1.797949 4.943592-2.921539 10.168594-2.921539 15.673981 0 5.561669 1.12359 10.786671 2.921539 15.730263 5.954619 16.404622 20.898982 28.313859 38.931684 30.055526 1.460258 0.112564 2.865257 0.449231 4.325515 0.449231 1.51654 0 2.921539-0.336668 4.381797-0.449231l113.930819 0 5.392824 14.999622 3.034103 8.370645 46.12348 128.424928 0.674359 1.965771c4.269233 9.719362 11.797697 17.584494 21.179368 22.415522 6.404873 3.314489 13.483082 5.392824 21.179368 5.392824 10.44898 0 19.999496-3.595898 27.752064-9.437953 0.842181-0.674359 1.629103-1.348718 2.472308-2.078335 1.179872-1.067308 2.416026-2.190899 3.707438-3.539616 3.707438-4.045129 6.797823-8.763594 8.876158-13.988596l2.921539-12.583596 52.414767-226.232534 6.236028-27.022447 14.550391-62.808488 99.380428 472.127897 1.629103 7.80885c1.236154 4.045129 2.865257 7.921413 5.112438 11.461029 8.258081 12.808724 22.528086 21.348214 38.875402 21.348214 25.168216 0 45.505403-20.11206 46.067198-45.167712l73.594135-365.276311c2.977821-5.786797 4.774747-12.246929 5.056156-19.157315l24.381293 70.561056c4.325515 15.055904 13.932314 21.460778 30.393217 21.460778l139.26788 0.225127c3.258207 0.730641 6.628978 1.179872 10.112312 1.179872 3.427052 0 6.741541-0.449231 9.999748-1.179872 20.673855-4.550643 36.178991-22.977317 36.178991-45.055149C964.009697 500.343519 946.2011 481.074663 923.280064 478.32197"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-eee" viewBox="0 0 1093 1024">' +
    '' +
    '<path d="M1024 0 68.266667 0C27.306667 0 0 34.133333 0 68.266667L0 955.733333C0 996.693333 27.306667 1024 68.266667 1024L1024 1024C1064.96 1024 1092.266667 989.866667 1092.266667 955.733333L1092.266667 68.266667C1092.266667 27.306667 1064.96 0 1024 0ZM1024 955.733333 68.266667 955.733333 68.266667 68.266667 1024 68.266667 1024 955.733333ZM505.173333 600.746667C525.653333 614.4 559.786667 614.4 580.266667 600.746667L866.986667 402.773333C887.466667 389.12 887.466667 361.813333 866.986667 348.16L580.266667 143.36C559.786667 129.706667 525.653333 129.706667 505.173333 143.36L218.453333 348.16C197.973333 361.813333 197.973333 389.12 218.453333 402.773333L505.173333 600.746667ZM307.2 354.986667 512 218.453333C525.653333 204.8 552.96 204.8 566.613333 211.626667L771.413333 348.16C785.066667 354.986667 785.066667 375.466667 771.413333 382.293333L566.613333 518.826667C552.96 525.653333 525.653333 525.653333 512 518.826667L307.2 382.293333C293.546667 382.293333 293.546667 361.813333 307.2 354.986667ZM218.453333 566.613333 505.173333 744.106667C525.653333 757.76 559.786667 757.76 580.266667 744.106667L866.986667 566.613333C880.64 559.786667 887.466667 552.96 887.466667 546.133333L791.893333 546.133333C791.893333 552.96 785.066667 552.96 785.066667 552.96L573.44 682.666667C559.786667 689.493333 532.48 689.493333 518.826667 682.666667L307.2 552.96C307.2 552.96 300.373333 552.96 300.373333 546.133333L204.8 546.133333C204.8 552.96 211.626667 559.786667 218.453333 566.613333ZM218.453333 703.146667 505.173333 880.64C525.653333 894.293333 559.786667 894.293333 580.266667 880.64L866.986667 703.146667C873.813333 696.32 880.64 689.493333 880.64 682.666667L785.066667 682.666667C785.066667 689.493333 778.24 689.493333 778.24 689.493333L573.44 819.2C559.786667 826.026667 532.48 826.026667 518.826667 819.2L307.2 696.32C300.373333 696.32 300.373333 689.493333 300.373333 689.493333L204.8 689.493333C204.8 689.493333 211.626667 696.32 218.453333 703.146667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gupiaozhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M667.395186 523.778254l-62.157665 0c-17.155728 0-31.078833 12.183484-31.078833 27.194362l0 380.718001c0 15.010879 13.923104 27.194362 31.078833 27.194362l62.157665 0c17.155728 0 31.078833-12.183484 31.078833-27.194362L698.474019 550.972617C698.474019 535.960715 684.550914 523.778254 667.395186 523.778254zM418.762479 648.094608l-62.157665 0c-17.155728 0-31.078833 11.603269-31.078833 25.898857l0 258.991636c0 14.296611 13.923104 25.898857 31.078833 25.898857l62.157665 0c17.155728 0 31.078833-11.603269 31.078833-25.898857L449.841312 673.993464C449.841312 659.696854 435.918207 648.094608 418.762479 648.094608zM170.130795 710.252273l-62.157665 0c-17.155728 0-31.078833 11.138688-31.078833 24.863271l0 198.906166c0 13.724583 13.923104 24.863271 31.078833 24.863271l62.157665 0c17.155728 0 31.078833-11.138688 31.078833-24.863271L201.209628 735.115544C201.209628 721.390961 187.2855 710.252273 170.130795 710.252273zM893.393383 399.461901l22.342868 0c18.066471 0 31.369452 14.184047 31.369452 31.679513l0 496.063029c0 17.851577-13.913894 31.679513-31.078833 31.679513l-31.078833 0-31.078833 0c-16.662495 0-31.078833-14.183024-31.078833-31.679513L822.790372 431.141414c0-17.851577 14.044878-31.679513 31.370475-31.679513L893.393383 399.461901M891.185089 193.19714l0 34.323737c0 15.356756 12.467963 27.76946 27.830859 27.76946 15.362896 0 27.831882-12.412704 27.831882-27.76946l0-83.309404 0-35.989679c0-10.80202-8.766664-19.550265-19.565615-19.550265l-36.098149 0-83.495646 0c-15.362896 0-27.830859 12.441357-27.830859 27.76946 0 15.356756 12.467963 27.770484 27.830859 27.770484l52.602032 0C672.593582 351.513866 404.046313 484.420875 103.908558 492.196978c-14.166651 0.361227-26.161846 11.05273-26.969235 25.187659-0.918929 16.773012 11.883655 30.825053 28.193109 30.408567C415.540088 539.821649 694.052313 404.804582 891.185089 193.19714"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loucengfenbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.3 64.2c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.5-448-448-448z m0 836.4c-214.5 0-388.4-173.9-388.4-388.4 0-214.5 173.9-388.4 388.4-388.4 214.5 0 388.4 173.9 388.4 388.4-0.1 214.5-173.9 388.4-388.4 388.4zM768 405.8L519 296.2l-269.4 119 260 106.5L768 405.8zM506.5 567.1l-170.7-73.6-81.4 42.3 258.4 104.9 256.9-111.2-90.8-31.3-172.4 68.9z m7.8 111.2L334.2 611l-81.4 37.6 258.4 112.8 249-112.8-73.6-40.7-172.3 70.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenbushijisuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M719.854679 114.934422L538.707108 9.983168a56.571286 56.571286 0 0 0-56.656612 0l-181.232897 104.951254a56.997917 56.997917 0 0 0-28.328306 49.318557v209.817182c0 20.136989 10.83643 39.164736 28.328306 49.147904l181.062244 104.780602a56.48596 56.48596 0 0 0 56.656612 0l181.232898-104.951254a57.339222 57.339222 0 0 0 28.413632-49.147905V164.082326a56.912591 56.912591 0 0 0-28.328306-49.147904z m-41.212566 251.541705L510.208149 464.004 341.774185 366.476127V171.505708L510.293476 74.063161 678.642113 171.505708v194.970419zM447.322723 603.256395L266.089826 498.305141a56.48596 56.48596 0 0 0-56.656612 0L28.370969 603.256395A56.997917 56.997917 0 0 0 0.042663 652.574952v209.731856c0 20.222315 10.83643 39.164736 28.328306 49.23323l181.062245 104.780602c17.577202 10.153821 39.164736 10.153821 56.656612 0l181.232897-104.951254a57.339222 57.339222 0 0 0 28.413632-49.147904V652.4043a57.083243 57.083243 0 0 0-28.413632-49.147905z m-41.127239 251.541705L237.76152 952.240647 69.327556 854.7981V659.827681l168.433964-97.442546L406.195484 659.827681v194.970419z m586.19115-251.541705L811.068411 498.305141a56.48596 56.48596 0 0 0-56.741938 0L573.264228 603.256395a56.997917 56.997917 0 0 0-28.328306 49.318557v209.731856c0 20.222315 10.83643 39.164736 28.328306 49.23323L754.326473 1016.235314c17.577202 10.153821 39.164736 10.153821 56.656612 0l181.232897-104.951254a57.339222 57.339222 0 0 0 28.413632-49.147905V652.4043a56.741938 56.741938 0 0 0-28.328306-49.147905z m-41.127239 251.541705L782.740105 952.240647 614.391467 854.7981V659.827681l168.433964-97.442546 168.51929 97.442546v194.970419z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)