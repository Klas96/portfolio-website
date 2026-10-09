'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "3969b238492e1fe85719996a3a0455b3",
"icons/Icon-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"icons/Icon-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"flutter_bootstrap.js": "3b05cdf005bf33b9e68be6656bfdf48a",
"assets/AssetManifest.bin.json": "5eed1a7424d12cb17b27c1e56bb2e496",
"assets/AssetManifest.json": "8569a1ee778183f4da7b170b03a46089",
"assets/assets/audio/sfx/damage_hit.mp3": "26cbf1a6969513ddd183fb2118a1a074",
"assets/assets/audio/sfx/ui_click.wav": "82401b5b3ace5fe4a76b41c7540f338b",
"assets/assets/audio/sfx/door_open.wav": "360edbe04a32ee64e6c84b6819a98412",
"assets/assets/audio/sfx/shoot.mp3": "bb639727ce521aaad9b22584d9b811e1",
"assets/assets/audio/sfx/footsteps.wav": "18353bfb747918b103d021c0c5613543",
"assets/assets/audio/sfx/portal.mp3": "90e44e7993892faa70fd2468ecb05fd9",
"assets/assets/audio/sfx/computer_beep.wav": "8e4edc9d26e80eb78fa019895f2cbe7f",
"assets/assets/audio/sfx/footstep_grass.mp3": "66e017a51b1f5f8ba17b5b09640731a4",
"assets/assets/audio/sfx/footstep_new.mp3": "fb9ab506f7a96336ca8ca3383f80103c",
"assets/assets/audio/voices/gaia_core_3.mp3": "3277a93658e4000cf75b74c9d0fd77da",
"assets/assets/audio/voices/cut_ending_a_p4_l2.mp3": "2fb98312d18cea639a3e2eee3ac67593",
"assets/assets/audio/voices/archivist_1.mp3": "aefe4a909543560b5ea2055689c8baa1",
"assets/assets/audio/voices/cut_memory4_p1_l1.mp3": "7fc5fd903b6f80c4545cb3a678d0b4ad",
"assets/assets/audio/voices/cut_memory3_p2_l1.mp3": "dea76859191646621bbfca0937033a0d",
"assets/assets/audio/voices/cut_memory2_p3_l1.mp3": "94ba5100c84a56add140ae33c751f222",
"assets/assets/audio/voices/gaia_3.mp3": "bcfe875c7e786347bbf4da5f501f73b2",
"assets/assets/audio/voices/echo7_2.mp3": "c05c99a42b2ca2eb39749b7cb01f05e9",
"assets/assets/audio/voices/cut_memory2_p2_l1.mp3": "02867cf9c9e1187c584e941cc27b8c1b",
"assets/assets/audio/voices/gaia_ask_1.mp3": "cc36a7a60b0107a075cf22c37d335d11",
"assets/assets/audio/voices/cut_awakening_p3_l1.mp3": "54dd06d2cb64dea272dd6bd0b76da922",
"assets/assets/audio/voices/cut_ending_a_p5_l1.mp3": "6632149d4c92ced2daa3ff31eb7d55be",
"assets/assets/audio/voices/gaia_ask_2.mp3": "2e58c928ec21d280761c94728172daf8",
"assets/assets/audio/voices/asha_3.mp3": "0a233a0a32e08267a2c603fd40172e6c",
"assets/assets/audio/voices/cut_awakening_p4_l1.mp3": "3c5cb5b8749a6b550eecd90aac2f52c0",
"assets/assets/audio/voices/cut_ending_a_p2_l1.mp3": "4d250d3b5f5e05a65a1191e64e61333a",
"assets/assets/audio/voices/cut_ending_b_p1_l1.mp3": "66542cd18c3472737816785849d85528",
"assets/assets/audio/voices/cut_memory4_p3_l2.mp3": "09e39d851053b06f60455656f7f576fb",
"assets/assets/audio/voices/cut_awakening_p2_l1.mp3": "f755297b330ad13c2d278e3b542dbb2b",
"assets/assets/audio/voices/cut_coalition_p1_l1.mp3": "c457905cc1c8cfe7ade8b1bc19a5d921",
"assets/assets/audio/voices/cut_memory2_p1_l1.mp3": "d92690a18f0f4556f11458ab84450053",
"assets/assets/audio/voices/cut_memory3_p3_l2.mp3": "6cabc0617b32b9202a00e4ebbad7b6cf",
"assets/assets/audio/voices/cut_memory1_p2_l1.mp3": "31f45bdcd3cdc9cea9f6f40e3a06e58c",
"assets/assets/audio/voices/echo7_1.mp3": "d43e37a9f0b1922c3bf60f82784049db",
"assets/assets/audio/voices/cut_ending_a_p1_l1.mp3": "f34c48e4498007e75c46e5a479778362",
"assets/assets/audio/voices/cut_ending_b_p3_l1.mp3": "1040ffbffc75820940d4eac5f22ac5eb",
"assets/assets/audio/voices/cut_coalition_p4_l1.mp3": "b0966444615f9cc5796f96f0f17196ae",
"assets/assets/audio/voices/voss_1.mp3": "c350de69220713e1f921a72e6fd19e9a",
"assets/assets/audio/voices/gaia_core_1.mp3": "644595a8dd4a59a80e07085e7e50e01e",
"assets/assets/audio/voices/gaia_2.mp3": "6b4a6e1d3e198ca910765cb874b81878",
"assets/assets/audio/voices/cut_memory5_p4_l3.mp3": "c58da839f2e0df61ce8ce26f732a8413",
"assets/assets/audio/voices/cut_coalition_p2_l1.mp3": "dbe183fc2888f9c185e988c80b61e4d0",
"assets/assets/audio/voices/asha_1.mp3": "b2296e09ee34c8f0d5b89a23782c8ef4",
"assets/assets/audio/voices/gaia_core_2.mp3": "f007d93c41fa7ef7f7d400b56536993e",
"assets/assets/audio/voices/voss_2.mp3": "21d7cb613f0ca1b5de945cd3ee6df623",
"assets/assets/audio/voices/cut_memory5_p4_l1.mp3": "e35151dad49ac7742ac14c0aca02e310",
"assets/assets/audio/voices/voss_3.mp3": "8b28d759db19559de80cbcae517766a6",
"assets/assets/audio/voices/cut_awakening_p5_l1.mp3": "f9c15b99f657a08d9319bf66c6661a76",
"assets/assets/audio/voices/cut_memory5_p2_l1.mp3": "a965f9960921a37d0a94fce81e07fda8",
"assets/assets/audio/voices/gaia_1.mp3": "b6eac68a9fdbf4aeff4f220a19775fcb",
"assets/assets/audio/voices/asha_2.mp3": "9bcabece54e82936c7a91e8bf660a8b8",
"assets/assets/audio/voices/cut_memory1_p3_l1.mp3": "aeae5cb87343d1ef3357278a2fb2df7e",
"assets/assets/audio/voices/cut_ending_a_p3_l1.mp3": "2f304ae2f0605197fac49e7066b85b41",
"assets/assets/audio/voices/cut_coalition_p4_l3.mp3": "dc1f9df630519dbbeaf9285e34ed16c8",
"assets/assets/audio/voices/archivist_3.mp3": "684ecbed45011d7eeb593b06e0554235",
"assets/assets/audio/voices/cut_memory3_p1_l1.mp3": "0809a51eba0b6adb66902c5ba4d5957e",
"assets/assets/audio/voices/cut_coalition_p3_l2.mp3": "2e3bccd1db79b08455ada7857a4343cf",
"assets/assets/audio/voices/gaia_remember_2.mp3": "f430bb46a645bd70830cd638928a2321",
"assets/assets/audio/voices/cut_awakening_p1_l1.mp3": "3eee4c28e53bc01a87696c44e480b52b",
"assets/assets/audio/voices/archivist_2.mp3": "cfa9c085539af6b2fcb3ab8fa91d6726",
"assets/assets/audio/voices/cut_ending_b_p3_l2.mp3": "afef753676a6e820f4c56f094be0ca5e",
"assets/assets/audio/voices/cut_memory5_p3_l1.mp3": "08c8af0d5da931f56847e85a21120ab0",
"assets/assets/audio/voices/cut_ending_b_p2_l2.mp3": "d5274c10f442733c1a2018b9882403a6",
"assets/assets/audio/voices/cut_coalition_p3_l1.mp3": "0990dad456f92f36c699be33f2da8ab5",
"assets/assets/audio/voices/cut_memory4_p2_l1.mp3": "02c05972681a4f6a987da36fa94bff1f",
"assets/assets/audio/voices/cut_coalition_p4_l2.mp3": "4f6a06e35103d6aaa9c0e2a4356299e4",
"assets/assets/audio/voices/cut_ending_b_p2_l1.mp3": "a70c3c508070a0d864004bb31810fec5",
"assets/assets/audio/voices/cut_memory2_p3_l2.mp3": "91a625586fe62cabf9803e13d255d8a2",
"assets/assets/audio/voices/cut_memory5_p1_l1.mp3": "3ea1145494c6c52b77f1348a4941fe55",
"assets/assets/audio/voices/cut_memory3_p3_l1.mp3": "f734b3b00edf55f2d7cc98369aa0e8c8",
"assets/assets/audio/voices/cut_memory4_p3_l1.mp3": "1929972c1c87655b7b265f712449b57b",
"assets/assets/audio/voices/cut_coalition_p3_l3.mp3": "30531e8801abb211b2fc72f2a1e9c805",
"assets/assets/audio/voices/echo7_3.mp3": "ad32ea687331e515e62b34059603e535",
"assets/assets/audio/voices/cut_memory5_p4_l2.mp3": "a026db055f66df1fd708a1887855ba3c",
"assets/assets/audio/voices/gaia_remember_1.mp3": "108af04133d3db71cca6df03fd26a499",
"assets/assets/audio/voices/cut_ending_a_p4_l1.mp3": "96fbb9bb2d42b4fc429e3a01d7c3ea7d",
"assets/assets/audio/voices/cut_memory1_p1_l2.mp3": "40369a3c2738dffbb605c63baf7ca28e",
"assets/assets/audio/voices/cut_memory1_p1_l1.mp3": "756fffb8ea34137fbb8666120ddee7af",
"assets/assets/audio/music/Echoes_of_the%2520Deep_Mine.mp3": "6e2db0d9a69dc32e694d06c1c5ab4cfd",
"assets/assets/audio/music/Space_Launch_City.mp3": "5f770a9b3bbe44bb075905b1e283f9b3",
"assets/assets/audio/music/corporate_response.wav": "131c8b8887ed01b5bb9e80e16d94ba63",
"assets/assets/audio/music/Space_Launch_City3.mp3": "7525739f544472910fcd5194b18888f4",
"assets/assets/audio/music/Whispering_Pines.mp3": "127642f7bd2da3375ce2d110883ff128",
"assets/assets/audio/music/morning_shift.wav": "0857f60ef096e9d396372314d392279b",
"assets/assets/audio/music/Space_Launch_City2.mp3": "e965e30cabff3d9dced0dd3ba6c0737d",
"assets/assets/audio/music/underground.wav": "30359a624ef9eb7e3c71d49d1e108c9d",
"assets/assets/audio/music/Neon_Shadows.mp3": "09e912d3ae706170b03d3d40dc3c6655",
"assets/assets/audio/music/final_choice.wav": "2bf95d1398f2cc069ebcb233f62365d9",
"assets/assets/audio/music/Whispering_Pines2.mp3": "59ba849f60278f04ebd4436e42288739",
"assets/assets/audio/music/system_anomaly.wav": "0d94af215c99052e443dadb9c634d72f",
"assets/assets/audio/music/Neon_Mirage.mp3": "06c2b3013fc7369df08016904f195aa3",
"assets/assets/cutscenes/memory1/memory1_p1.webp": "c9da8a922de18a73e877c0227975f813",
"assets/assets/cutscenes/memory1/memory1_p3.webp": "bac5ac3ab2798d546b615a50537cc589",
"assets/assets/cutscenes/memory1/memory1.json": "adc5215584123bf1f941b323959fce77",
"assets/assets/cutscenes/memory1/memory1_p2.webp": "a82f629aa872bdd65526f8e200ff5a48",
"assets/assets/cutscenes/memory2/memory2.json": "875f9ee2436c91615aa7f66973d48437",
"assets/assets/cutscenes/memory2/memory2_p1.webp": "e4f4ba4c6d386844d6f457a52765c5cc",
"assets/assets/cutscenes/memory2/memory2_p3.webp": "7d9f9d657d767230b7ed086a58c8d187",
"assets/assets/cutscenes/memory2/memory2_p2.webp": "ad4d62ea11bb4190fe7fa42a06fa3fe2",
"assets/assets/cutscenes/awakening/awakening_p5.webp": "2ba08449e2dd9de635da6ce36ba4da1a",
"assets/assets/cutscenes/awakening/awakening.json": "b0afef6b87faf656c75a1cb19f4bcbd9",
"assets/assets/cutscenes/awakening/awakening_p1.webp": "3bcc96ea970a87620809ffd68274ca5d",
"assets/assets/cutscenes/awakening/awakening_p3.webp": "850d3290d1d0955d88544d8dc93d0982",
"assets/assets/cutscenes/awakening/awakening_p4.webp": "5fc0d11c5574bf2bfdefb000924410f1",
"assets/assets/cutscenes/awakening/awakening_p2.webp": "7ec6e2ad299d22b8513f13a9dc399856",
"assets/assets/cutscenes/after_sentinel/after_sentinel.json": "337298a995c523687ca25577809d4d43",
"assets/assets/cutscenes/ending_b/ending_b.json": "4216efa59515b2e3a899d21401d8b416",
"assets/assets/cutscenes/memory3/memory3.json": "e049851bf2637e76ba96040890e4536b",
"assets/assets/cutscenes/memory3/memory3_p2.webp": "b859b95470f7454a890a18e1630e5450",
"assets/assets/cutscenes/memory3/memory3_p1.webp": "ff12861134d635895e1e72401a814522",
"assets/assets/cutscenes/memory3/memory3_p3.webp": "78ca831921d24138f1e56e3e9a365ca7",
"assets/assets/cutscenes/coalition/coalition_p3.webp": "f81521d79c87fe3b67b883480733870f",
"assets/assets/cutscenes/coalition/coalition_p1.webp": "64ab1e221bb1ad059ec3e8e65544aabe",
"assets/assets/cutscenes/coalition/coalition_p4_glow.webp": "4404048a5e4431d63bcc395684baff24",
"assets/assets/cutscenes/coalition/coalition_p2.webp": "890541b0b8e288c0e0532045f72c9649",
"assets/assets/cutscenes/coalition/coalition.json": "badfdc161061e675b8e67138c1b6db30",
"assets/assets/cutscenes/coalition/coalition_p4.webp": "b633bef2b0b4250de3465d396dec8602",
"assets/assets/cutscenes/memory4/memory4_p3.webp": "e2441a9ab30c96984b2df95b29aada44",
"assets/assets/cutscenes/memory4/memory4_p2.webp": "891afaefc01c4617b97d15332fad95e5",
"assets/assets/cutscenes/memory4/memory4.json": "55449cfae1c1db1a121f5aa86fa0779d",
"assets/assets/cutscenes/memory4/memory4_p1.webp": "26df17157904a8370958111d3b8a6ee4",
"assets/assets/cutscenes/memory5/memory5_p3.webp": "2a2542a24f90ba0b48704fd75bb76045",
"assets/assets/cutscenes/memory5/memory5_p2.webp": "1f9cd6536779abc4d78e98bef6981218",
"assets/assets/cutscenes/memory5/memory5_p4.webp": "a4e26a606ca336b44dec48c900f90687",
"assets/assets/cutscenes/memory5/memory5.json": "9cdc71fd52787102ffd6733771acc31b",
"assets/assets/cutscenes/memory5/memory5_p1.webp": "bedaec3c5b8c04bdfe555e530df756c6",
"assets/assets/cutscenes/ending_a/ending_a.json": "7f9109ccc2842a32459a08e1af3a3e9a",
"assets/assets/images/maps/cyberpunk-mask.png": "e5fd6b4d29abab79d47fc2ef9fea6f0d",
"assets/assets/images/maps/city-texture.png": "479f232727113d5d3d03346674eace23",
"assets/assets/images/maps/world4.tmj": "04bc15c29d1062d2c8ef13481b92ee8f",
"assets/assets/images/maps/cyberpunk-texture.png": "0838d4f8e1d8c4b80f30ed43251a3700",
"assets/assets/images/maps/Untitled_Artwork(1).png": "7d8d610c03c13981916bdb8561791495",
"assets/assets/images/maps/buildings/apartment_block.png": "1e878bc83d681af5f505da50360f6e68",
"assets/assets/images/maps/buildings/archive_library.png": "b1e315260cf3aadded79453202e70576",
"assets/assets/images/maps/buildings/tea_house.png": "82131dbffc28e09f3c1b4f9f9a5afd79",
"assets/assets/images/maps/buildings/greenhouse.png": "1028796645c8c8b490ad0826a602f55a",
"assets/assets/images/maps/buildings/ruin_shrine.png": "9a11e82d896cf4e1041493922cac112a",
"assets/assets/images/maps/buildings/ranger_cabin.png": "9da7be8697965324288fcdd5938053d3",
"assets/assets/images/maps/buildings/noodle_shop.png": "9245171cbee3104f06549a2566142d7a",
"assets/assets/images/maps/wods-texture.png": "cb4f093ad880c25849747dd7707fcb87",
"assets/assets/images/maps/world3.tmj": "f41c73140350b75dadd287b6feea43a3",
"assets/assets/images/maps/tilesets/city.png": "af96fdd8977dc476b082a0d9ae707d2e",
"assets/assets/images/maps/tilesets/cyberpunk.png": "6cecf88855f4b198d91899787e805ded",
"assets/assets/images/maps/tilesets/core.png": "716ba600f0ee38c6fe96d85d962b824a",
"assets/assets/images/maps/tilesets/woods.png": "0f87f564ec1fcc4eed23b4fcfdbc6fa8",
"assets/assets/images/maps/world.tmj": "7f6dcfb1636e19602a99aaf58d48132b",
"assets/assets/images/maps/Starter-map.png": "75dfc98b4c5b139945de717de0928c18",
"assets/assets/images/maps/world5.tmj": "603aa1d6d6b511ab42092a5cdd7a6ce4",
"assets/assets/images/maps/world2.tmj": "cdc15fb2c470d925ce24f64c59f095da",
"assets/assets/images/maps/ai-map-texture.png": "86fd31a5135083bc4fc456f4690a7fe6",
"assets/assets/images/ui/book_left_mid@2x.png": "f2a8e40fa2d7ba2e77309fe419551fa4",
"assets/assets/images/ui/book_right_bottom@2x.png": "f443f83a6206c53f78f4c97201f6ff95",
"assets/assets/images/ui/book_left_bottom@2x.png": "fecbd40d500c6c62cdb9763e71388813",
"assets/assets/images/ui/entry_card@2x.png": "eb056ca32231bda2abe3b5a39c6cdebe",
"assets/assets/images/ui/crystal_16@2x.png": "70a1bff9b723233d07b595419c2ed687",
"assets/assets/images/ui/tab_paw_32@2x.png": "359bbf385d58a47cb076deb85d0c9117",
"assets/assets/images/ui/book_right_mid@2x.png": "e7674c0f93c51ec29969eb0dd17252f8",
"assets/assets/images/ui/tab_moon_32@2x.png": "b1acddf9ab36c8f07f27e903625e66a4",
"assets/assets/images/ui/book_right_top@2x.png": "618bbf4b9be16fd704d21b6c7a7c5153",
"assets/assets/images/ui/book_left_top@2x.png": "dd025ac930b200c59ab3653941fb7a8b",
"assets/assets/images/sprites/fragment.png": "5b6f6cf84bbc2d16ab95f430b0ab0399",
"assets/assets/images/sprites/player.png": "fe690857d46f825c9d465834cfc9b531",
"assets/assets/images/sprites/bullet.png": "a55e7a9ecc7f64f94717061688db50fd",
"assets/assets/images/sprites/npc_archivist.png": "a636f268f752948bcb1712e98a3b0181",
"assets/assets/images/sprites/enemy_ship.png": "63b2564dd2d3c1f1676fccc8e1e139e0",
"assets/assets/images/sprites/kaela_walk.png": "bf859d5cc2833f7abf9c0c5f993137ac",
"assets/assets/images/sprites/npc_voss.png": "6b31c91d7e7f2a43a2c41c975f442c7a",
"assets/assets/images/sprites/gaia_walk.png": "c0dca37bbefc5d7b8e4c5478fd356b92",
"assets/assets/images/sprites/echo7_walk.png": "dbedbfee770e8896cbefba2010aa924b",
"assets/assets/images/sprites/uec_drone.png": "47ac4db9178eb493fa9d38bf3183f949",
"assets/assets/images/sprites/npc_gaia.png": "0f7a767dae6a412e8ca4a75f6e210da6",
"assets/assets/images/sprites/asha_walk.png": "506a8ebeea436d049cb2b83ab90cf9f8",
"assets/assets/images/sprites/npc_asha.png": "80044055c567b03ac332a173b45fb5cc",
"assets/assets/images/sprites/voss_walk.png": "62699b160b91b0ae09cd56b8fac57ec8",
"assets/assets/images/sprites/health_pickup.png": "2c75907b2644728ff477f8a03fad8c1f",
"assets/assets/images/sprites/explosion.png": "c7d2f9dcc3d91541b300d968b258bc47",
"assets/assets/images/sprites/asteroid.png": "f9e87f65c27df622b0f3f77a64036879",
"assets/assets/images/sprites/archivist_walk.png": "14d80f52606222e92cca8e79f9470abc",
"assets/assets/images/sprites/sentinel_boss.png": "a2ef5df977e3c3686ed351eb97edf42d",
"assets/assets/images/sprites/npc_echo7.png": "a33e8da2537d953e8e7635d862092ba4",
"assets/assets/images/creatures/puffcap_sheet.png": "e8fdc2bf1328ad8d26ec7fceb7560414",
"assets/assets/images/creatures/puffcap_hide.png": "9dd028f7b10492950de95a8a6d441dee",
"assets/assets/images/creatures/stoneturtle_portrait_sketch.png": "c789c375d617518884551b50f2f697fd",
"assets/assets/images/creatures/PLACEHOLDERS.txt": "6d3ee98a0b37bd113157e1fdfac6f596",
"assets/assets/images/creatures/glowmoth_sheet.json": "0166ce5a08f94931da07d78c9951e680",
"assets/assets/images/creatures/glowmoth_portrait_sketch.png": "b7538cea066b4449939102ec641e47a0",
"assets/assets/images/creatures/river_pebble.png": "f898949df4b98bb160619a5cfca6a793",
"assets/assets/images/creatures/puffcap_sheet.json": "cf40703a3fd46e3926e4b88e643e272c",
"assets/assets/images/creatures/vinefox_sheet.json": "18af98e592a68a5b03a387ed31f85055",
"assets/assets/images/creatures/hushdeer_portrait_silhouette.png": "c9cc62bd93aa7c8225062edd986c228b",
"assets/assets/images/creatures/glowmoth_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/glowmoth_portrait.png": "0bc9c8dc86c6801baf5f5dfe93a546ea",
"assets/assets/images/creatures/hushdeer_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/puffcap_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/puffcap_portrait_sketch.png": "54d22d0359f3778e5e838b4dd6080393",
"assets/assets/images/creatures/moonflower_glow.json": "623d91ad5504d8d17a1c44b06355e786",
"assets/assets/images/creatures/brookling_portrait_sketch.png": "f15da522ae3ec7f48c47f5b73336d269",
"assets/assets/images/creatures/brookling_portrait.png": "07dc9d0629e28ca660aea0cbd45aae09",
"assets/assets/images/creatures/stoneturtle_sheet.json": "18af98e592a68a5b03a387ed31f85055",
"assets/assets/images/creatures/river_pebble_sparkle.json": "36f37b58124b57c53a77c64609570632",
"assets/assets/images/creatures/hushdeer_sheet.png": "a19257ad11ff63f0757b2dc020455609",
"assets/assets/images/creatures/hushdeer_portrait_sketch.png": "7dbb26b2691f77a4e351bae0e23b493f",
"assets/assets/images/creatures/stoneturtle_portrait.png": "9e1842f3a4b2ca0a54de7d4f60bb97b6",
"assets/assets/images/creatures/brookling_sheet.json": "cf40703a3fd46e3926e4b88e643e272c",
"assets/assets/images/creatures/vinefox_portrait_silhouette.png": "9aff320cb0e030bc4c2bda04aa2a3993",
"assets/assets/images/creatures/brookling_portrait_silhouette.png": "a979b484390d238312b28c3a05bab379",
"assets/assets/images/creatures/stoneturtle_sheet.png": "2cf9b8b5c2e01f703db69ac02210903a",
"assets/assets/images/creatures/hushdeer_portrait.png": "f15628e848ed5769f1a84a84e94069c5",
"assets/assets/images/creatures/brookling_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/glowmoth_portrait_silhouette.png": "74519d160e55c5afc5414ef94dca3ec2",
"assets/assets/images/creatures/moonflower.png": "99665a78f49abde67194247ff418c08c",
"assets/assets/images/creatures/vinefox_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/stoneturtle_portrait_silhouette.png": "d766d26753b957d800cbaabb92c9366d",
"assets/assets/images/creatures/vinefox_portrait_sketch.png": "4d37cf19363ffa65e95c9fef6b667bd5",
"assets/assets/images/creatures/vinefox_sheet.png": "9405b9ef720f2f1a1ff2807613cba5dd",
"assets/assets/images/creatures/brookling_sheet.png": "205fc2f754715bdfee84fce39b724a30",
"assets/assets/images/creatures/puffcap_hide.json": "a88aefcddbaf0b9877534a027bc24486",
"assets/assets/images/creatures/river_pebble_sparkle.png": "4eefda6aeb7a5eb1de8c3ffc971e4b1b",
"assets/assets/images/creatures/glowmoth_sheet.png": "d56c7103d5c85111e93c655dfff593fd",
"assets/assets/images/creatures/vinefox_portrait.png": "ef33162a524d9f2147a07dc0863ad956",
"assets/assets/images/creatures/puffcap_portrait_silhouette.png": "ef8bd3acf9279b6e5a8f82b05590a107",
"assets/assets/images/creatures/puffcap_portrait.png": "e5c5868222c6de234a6712e8258d8842",
"assets/assets/images/creatures/stoneturtle_shadow.png": "20732f532685233e3c5c7b60d7f3b954",
"assets/assets/images/creatures/hushdeer_sheet.json": "cf40703a3fd46e3926e4b88e643e272c",
"assets/assets/images/creatures/moonflower_glow.png": "48d60f5524a717f133e56c24bce2d6a1",
"assets/assets/images/obstacles/bramble_closed.png": "28bbdd0485ea5b91f9a9a2b7a2d2f960",
"assets/assets/images/obstacles/boulder_push_anim.png": "bf6a1ce2ec170c300bf6eff2cfab2d6f",
"assets/assets/images/obstacles/light_mask.png": "c2eb2e23cd4bd508091a5b8585210b9a",
"assets/assets/images/obstacles/bramble_open.png": "1c60f6822b97b6b9b2d195f1c7a9be37",
"assets/assets/images/obstacles/fetch_sparkle_anim.png": "99c9acef704c48e353a82a5560c59e09",
"assets/assets/images/obstacles/boulder.png": "40ae3892c2000e4ed25d5304abbf415f",
"assets/assets/images/obstacles/glyph.png": "74fb9ac6e7315b79d0025b0d372e0062",
"assets/assets/images/obstacles/darkness_overlay.png": "79fb4f77f11d7d0492d612036407166d",
"assets/assets/images/obstacles/sweetroot_stump_plain.png": "8bfdef75d4511c954cdeb03e0bbd11b2",
"assets/assets/images/obstacles/boulder_2x2.png": "abbbdb910f765a99a21d4a254f8f6e9c",
"assets/assets/images/obstacles/shimmer_anim.png": "1b3cc356b6d87fbf35efe98af28979fe",
"assets/assets/images/obstacles/shimmer.png": "ce062550a8e2b30aca54bfba5ad8e388",
"assets/assets/images/obstacles/sweetroot_stump.png": "8fcf59f977eb0ec23e2aabef357cb877",
"assets/assets/images/obstacles/chest_plain.png": "cee8f53696b67178fffbe68a28af3895",
"assets/assets/images/obstacles/bramble_open_motes_anim.png": "8391dcb4536040438cfef7c33b424d7c",
"assets/NOTICES": "40cfc49a1216135bcde0aa3b14c55c98",
"assets/AssetManifest.bin": "849135f4345f9cc3adfbdd85760b8ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "637e85a3eec5cdd965fa162da6175d2f",
"index.html": "682d711ea07992bef3d7ab8015d89322",
"/": "682d711ea07992bef3d7ab8015d89322",
"version.json": "f45a50408434096b103f4ae1a7bdcad1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3d9849baea84eae01c239d604c225d11",
"main.dart.js": "60f7c66b0f0d9625d28f4a3b286981cd",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
