'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "3969b238492e1fe85719996a3a0455b3",
"icons/Icon-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"icons/Icon-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"flutter_bootstrap.js": "f3bae6d80551579a693020bdfe7daa3a",
"assets/AssetManifest.bin.json": "d37bd4c5f7d4855935f84b8ed3573e17",
"assets/AssetManifest.json": "f94d9c6106999233ce4037f06c5468fc",
"assets/assets/audio/sfx/damage_hit.mp3": "26cbf1a6969513ddd183fb2118a1a074",
"assets/assets/audio/sfx/ui_click.wav": "82401b5b3ace5fe4a76b41c7540f338b",
"assets/assets/audio/sfx/door_open.wav": "360edbe04a32ee64e6c84b6819a98412",
"assets/assets/audio/sfx/shoot.mp3": "bb639727ce521aaad9b22584d9b811e1",
"assets/assets/audio/sfx/footsteps.wav": "18353bfb747918b103d021c0c5613543",
"assets/assets/audio/sfx/portal.mp3": "90e44e7993892faa70fd2468ecb05fd9",
"assets/assets/audio/sfx/computer_beep.wav": "8e4edc9d26e80eb78fa019895f2cbe7f",
"assets/assets/audio/sfx/footstep_grass.mp3": "66e017a51b1f5f8ba17b5b09640731a4",
"assets/assets/audio/sfx/footstep_new.mp3": "fb9ab506f7a96336ca8ca3383f80103c",
"assets/assets/audio/voices/gaia_core_3.mp3": "e80cfd503f33b1a02225b571409da063",
"assets/assets/audio/voices/gaia_core_archive.mp3": "8ea566690be9e803b5edea11c2e1ad57",
"assets/assets/audio/voices/voss_refuse_short.mp3": "73e1c29bda9a319f8be3fc16de915f52",
"assets/assets/audio/voices/gaia_skiff_2.mp3": "e944d6f56c6a507001983bd985473985",
"assets/assets/audio/voices/cut_ending_a_p4_l2.mp3": "cd2d786eaaf00d2ca664d5cb9f591bb3",
"assets/assets/audio/voices/archivist_1.mp3": "5a59bb28127f7193951167a30e50cca3",
"assets/assets/audio/voices/gaia_core_child.mp3": "ae571a16bc774cbbc4a7f105f11e2a18",
"assets/assets/audio/voices/cut_memory4_p1_l1.mp3": "711d9b822b4c36aa03ef2f36e97a5f98",
"assets/assets/audio/voices/gaia_skiff_1.mp3": "393a159c0b1b658b7ffdbaa0f31d3055",
"assets/assets/audio/voices/gaia_core_short.mp3": "c9d7792466e3c9ed51abafddc602b964",
"assets/assets/audio/voices/mira_archive.mp3": "9aaae6f45d66e0d51b6be2c1763c39ec",
"assets/assets/audio/voices/cut_memory3_p2_l1.mp3": "b5ea731fbfc389c978efa070973c8421",
"assets/assets/audio/voices/cut_archive_ash_p2_l1.mp3": "988c89542a1bdeee4ec05b72ec4c466d",
"assets/assets/audio/voices/cut_memory2_p3_l1.mp3": "2179ffb732440aebaf5257758e0b58e6",
"assets/assets/audio/voices/asha_archive_3.mp3": "de9742ceef2edc09fc0a48372c93ecec",
"assets/assets/audio/voices/asha_archive_2.mp3": "1560291bfe6ef726a9c623522d23af8e",
"assets/assets/audio/voices/archivist_post_1.mp3": "6185d11a6fa99fcb36de2b18f8462505",
"assets/assets/audio/voices/gaia_3.mp3": "2c1675e2f57baca0e85088186dd4f597",
"assets/assets/audio/voices/echo7_2.mp3": "8238a3c16293a57594e27bf5a50b6c75",
"assets/assets/audio/voices/cut_memory2_p2_l1.mp3": "71d768bb56e6e7c4aa762d977107edc8",
"assets/assets/audio/voices/gaia_ask_1.mp3": "0fda320db2733fc83ed424bc723ff1e8",
"assets/assets/audio/voices/cut_awakening_p3_l1.mp3": "f08dbef999084f360fce4f4e0985e088",
"assets/assets/audio/voices/cut_ending_a_p5_l1.mp3": "03af3839d7df7b098efc33d46c90581f",
"assets/assets/audio/voices/gaia_ask_2.mp3": "98930ead012d30df8ca913daa1452284",
"assets/assets/audio/voices/asha_3.mp3": "39931b6f6db361775ef5dcdcebb81ff7",
"assets/assets/audio/voices/voss_refuse.mp3": "af4306a3691420e83145d4184f93f745",
"assets/assets/audio/voices/cut_awakening_p4_l1.mp3": "7ec3c5241fb9f114cd9520f2e0e290be",
"assets/assets/audio/voices/cut_ending_a_p2_l1.mp3": "5a9d512c3aa638f3f51ad97e607d8778",
"assets/assets/audio/voices/cut_ending_b_p1_l1.mp3": "a7a0771c1782b775d07187674ba46c81",
"assets/assets/audio/voices/cut_memory4_p3_l2.mp3": "f55e8052e182546a593811fe1b1abe35",
"assets/assets/audio/voices/asha_key_1.mp3": "2c45edd4b86cfc393a2700e46e4a732e",
"assets/assets/audio/voices/archivist_s7.mp3": "6553dcbf411019aa842f7b013864a62b",
"assets/assets/audio/voices/cut_awakening_p2_l1.mp3": "bf7c97dbd164f3d9653f991107502d5c",
"assets/assets/audio/voices/cut_after_sentinel_p2_l2.mp3": "a250dfc6288f675bbe0d5bdc52ba5b6f",
"assets/assets/audio/voices/asha_give_1.mp3": "d1b2efa3deab7ce94923ed5b0bed7ca9",
"assets/assets/audio/voices/cut_coalition_p1_l1.mp3": "bab371633b0e372a2c2f111a29d34402",
"assets/assets/audio/voices/cut_memory2_p1_l1.mp3": "d1c4d910f4e4455add432247508986a9",
"assets/assets/audio/voices/archivist_seal_give.mp3": "33c819319590c041bb4e4c16a990bf94",
"assets/assets/audio/voices/cut_memory3_p3_l2.mp3": "30366058f6a3daeec4ec86249e281fe9",
"assets/assets/audio/voices/cut_after_sentinel_p2_l1.mp3": "55e9974e84ec806c9cde39a0702bae53",
"assets/assets/audio/voices/asha_key_2.mp3": "658e2cc1d7b9f2fab2b9d7cf29588e0a",
"assets/assets/audio/voices/cut_memory1_p2_l1.mp3": "0a32fca30161ceb6f594985b9a86da17",
"assets/assets/audio/voices/echo7_1.mp3": "2182ed601017bb6b75498c56b5011a2c",
"assets/assets/audio/voices/echo7_fear.mp3": "ff6930ef090f50459266b2a571db38df",
"assets/assets/audio/voices/mira_2.mp3": "19903ca16ab9843313d6b9b6445d3263",
"assets/assets/audio/voices/cut_ending_a_p1_l1.mp3": "61c9bfd62ef0f2aa3005f40549ecc001",
"assets/assets/audio/voices/cut_ending_b_p3_l1.mp3": "605988cec8c4ac3edcc8d0969e3775c3",
"assets/assets/audio/voices/archivist_after_1.mp3": "e02e4898dd347466df678674caddda61",
"assets/assets/audio/voices/cut_coalition_p4_l1.mp3": "65448090d4e1af15ec345a3a41e86ec5",
"assets/assets/audio/voices/voss_1.mp3": "cdcabce88dfe92eedae56ac86e6b3ea1",
"assets/assets/audio/voices/cut_archive_ash_p2_l2.mp3": "813a295fe259f1c9a17ea26559ace753",
"assets/assets/audio/voices/archivist_3_seal.mp3": "5a801c44086d737ef022788122cbfead",
"assets/assets/audio/voices/gaia_core_1.mp3": "8c44f63dcbf801f63f1b29978d4020b4",
"assets/assets/audio/voices/gaia_2.mp3": "d939301c9cff94b81ab92ecd29f08955",
"assets/assets/audio/voices/mira_board.mp3": "debbcf3c33185036d29dbe266e18774b",
"assets/assets/audio/voices/cut_memory5_p4_l3.mp3": "c52cb3e91275830c767ade8019513001",
"assets/assets/audio/voices/mira_1.mp3": "fa72a2ead26796441c0977e789c0ddd2",
"assets/assets/audio/voices/cut_coalition_p2_l1.mp3": "2a66b3e42b636f6159e0e1a25f6153e1",
"assets/assets/audio/voices/archivist_post_3.mp3": "5f847b53a71337a5447b102a25bf4bc7",
"assets/assets/audio/voices/asha_1.mp3": "05d4202dfbaf1639c06fe4f37e4d4e46",
"assets/assets/audio/voices/gaia_core_2.mp3": "e568349ccd7a4556776f89cb0e5c2520",
"assets/assets/audio/voices/echo7_promise.mp3": "fe811fb9496a34e44ca3b52093cced5f",
"assets/assets/audio/voices/voss_2.mp3": "fc48c871a8148cde8a55de875e852ec9",
"assets/assets/audio/voices/archivist_after_2.mp3": "707e8bd5f691406459eeacba82f6ecd4",
"assets/assets/audio/voices/cut_memory5_p4_l1.mp3": "b2fa9c80486e4ff38459794bbbc80686",
"assets/assets/audio/voices/voss_3.mp3": "0051c2ab27d66c867ecb594210740e2b",
"assets/assets/audio/voices/cut_awakening_p5_l1.mp3": "5d9ec69864b6175220a32f1fe74ff59d",
"assets/assets/audio/voices/cut_memory5_p2_l1.mp3": "5d09e8ea92c1d419e2cd54df667e4b69",
"assets/assets/audio/voices/cut_after_sentinel_p1_l1.mp3": "196f2b190abdd0788e10e0c7a5a27966",
"assets/assets/audio/voices/gaia_1.mp3": "d065d3ad10208a9240c84589903260c4",
"assets/assets/audio/voices/asha_archive_1.mp3": "edad09e6ea80573b02efa3f1ae73e1b4",
"assets/assets/audio/voices/voss_why.mp3": "a2dc0d0df48a2762447abf1771ffd665",
"assets/assets/audio/voices/asha_2.mp3": "a08b0bd7ab5e456f352ab03317f3321e",
"assets/assets/audio/voices/voss_orders_2.mp3": "6361a4c6a994ea79d48c554aece162ac",
"assets/assets/audio/voices/cut_memory1_p3_l1.mp3": "038c2c79e8ba5394edf08a05aecc3c2c",
"assets/assets/audio/voices/cut_ending_a_p3_l1.mp3": "024e7bc027d73c6e30703345131b5f21",
"assets/assets/audio/voices/cut_coalition_p4_l3.mp3": "3aa7843eba37bd6a7299eaa5584d9d4a",
"assets/assets/audio/voices/archivist_3.mp3": "f52ba74db83ee7a30456e4760a970037",
"assets/assets/audio/voices/gaia_core_voss.mp3": "989385cb3d07c247f790135bef3e7f80",
"assets/assets/audio/voices/voss_orders_3.mp3": "53e626badfe58149d24009704f5a4c08",
"assets/assets/audio/voices/cut_memory3_p1_l1.mp3": "0941bef3ac757c3fe30258adae2575e2",
"assets/assets/audio/voices/voss_confront_2.mp3": "f28c68b90a1edc19435595cd49200b9a",
"assets/assets/audio/voices/cut_after_sentinel_p2_l3.mp3": "e9c573d8938ced55f3d1723f8d27bc3c",
"assets/assets/audio/voices/archivist_post_ready.mp3": "421dabba44eef3d48010f46899e5dd4d",
"assets/assets/audio/voices/cut_after_sentinel_p3_l1.mp3": "c202003e37db7c9c6c0b13758a8d6a0b",
"assets/assets/audio/voices/cut_coalition_p3_l2.mp3": "be427ca204d13afad6f6318d84ea1fcc",
"assets/assets/audio/voices/archivist_post_2.mp3": "ef750ac5f73acc385ceaa07d0f0515a2",
"assets/assets/audio/voices/gaia_remember_2.mp3": "e4c14b6f5ee56f374d8fa7669f3e396d",
"assets/assets/audio/voices/cut_awakening_p1_l1.mp3": "9051baec6c053f46cf84761e5d8ececf",
"assets/assets/audio/voices/asha_give_2.mp3": "58c0c71e27c163a7f3ed1c0268a528d3",
"assets/assets/audio/voices/archivist_2.mp3": "ea092c296b87b0879a22c2962c64bafa",
"assets/assets/audio/voices/cut_ending_b_p3_l2.mp3": "b6a4b7ffa1a606529ae457a3078c301a",
"assets/assets/audio/voices/cut_memory5_p3_l1.mp3": "540c1fdf86b103ad0daff64428c46624",
"assets/assets/audio/voices/cut_archive_ash_p3_l2.mp3": "cab421013de9bc16593660f67f0c5f1e",
"assets/assets/audio/voices/cut_ending_b_p2_l2.mp3": "041d920a30fd6023c0736e6bee7cf08f",
"assets/assets/audio/voices/cut_coalition_p3_l1.mp3": "2efc4141ad0319c7a26c476f9949c1e4",
"assets/assets/audio/voices/cut_memory4_p2_l1.mp3": "c5bc1d1d34aa93df0a71db434c86df2e",
"assets/assets/audio/voices/archivist_post_seal.mp3": "4a11dd6dd06d18d63eac653c96db8523",
"assets/assets/audio/voices/voss_confront_1.mp3": "9ae517632788fc62a74b3a4888c5c098",
"assets/assets/audio/voices/asha_trust.mp3": "58d7873407deb08286d9986711c01814",
"assets/assets/audio/voices/cut_coalition_p4_l2.mp3": "4565bca452c1a19df5e13cf028f74f53",
"assets/assets/audio/voices/cut_ending_b_p2_l1.mp3": "9968e98af464affa1b496b8e1cad3d44",
"assets/assets/audio/voices/cut_archive_ash_p1_l1.mp3": "40bbc86e0493953a54b5a2e5b9c9ab0b",
"assets/assets/audio/voices/cut_memory2_p3_l2.mp3": "81bad52759a2718c764e8e60c9d758ba",
"assets/assets/audio/voices/cut_memory5_p1_l1.mp3": "a6cc5e749a4ee455fec61fb41d4cc8b6",
"assets/assets/audio/voices/cut_awakening_p5_l2.mp3": "eac63b3b6ec0dae4761131a63259db10",
"assets/assets/audio/voices/gaia_core_found.mp3": "e97c68aaff18b4e04d834c35a5c29be3",
"assets/assets/audio/voices/gaia_core_m5.mp3": "77846d1f979460bc08e3ec8284d721d9",
"assets/assets/audio/voices/cut_memory3_p3_l1.mp3": "f34ecb1705223ae950ea92767aed96e3",
"assets/assets/audio/voices/mira_3.mp3": "fd4a03c27e5c264de5c885cd5bfaa291",
"assets/assets/audio/voices/asha_orders_2.mp3": "de4d4bd4cc99847f188b1d49e3ac042e",
"assets/assets/audio/voices/cut_memory4_p3_l1.mp3": "999802ff1dfae5e5d25692abcc1ede66",
"assets/assets/audio/voices/asha_orders_1.mp3": "8d0cca548d29b378962f26f239c00420",
"assets/assets/audio/voices/cut_archive_ash_p3_l1.mp3": "956bf2e223e8c5b5b10d7f719f73e528",
"assets/assets/audio/voices/voss_orders_1.mp3": "b7c6a4ae5e94faae93d71515a1308650",
"assets/assets/audio/voices/cut_coalition_p3_l3.mp3": "bb7d3c1cbf179b2a8b31690847bdb0a2",
"assets/assets/audio/voices/gaia_core_orders.mp3": "ca0be6cd95f771c9b24732013c28bc86",
"assets/assets/audio/voices/echo7_3.mp3": "50dc1da8c8d72562597700435ea5b68b",
"assets/assets/audio/voices/cut_memory5_p4_l2.mp3": "daf1516a218f4eade6bb515faef164a4",
"assets/assets/audio/voices/gaia_remember_1.mp3": "2b3e3538526cdf58c3e8424cf2b19b6f",
"assets/assets/audio/voices/cut_ending_a_p4_l1.mp3": "09bd2c9f40e589c74f5ee5dcbdb522ce",
"assets/assets/audio/voices/asha_archive_ack.mp3": "dcf89e8c746d7eac8491a6310e31e0d7",
"assets/assets/audio/voices/cut_memory1_p1_l2.mp3": "2f1f9bc3692768bed8b55c3ab9093d8d",
"assets/assets/audio/voices/cut_memory1_p1_l1.mp3": "b79fb32c818511e7071833801078195b",
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
"assets/assets/cutscenes/archive_ash/archive_ash_p3.webp": "5be92ba233c9c146ee0498019e54800d",
"assets/assets/cutscenes/archive_ash/archive_ash.json": "9f7d329a509493b250b1100df5e9f50b",
"assets/assets/cutscenes/archive_ash/archive_ash_p2.webp": "e80b750cefb3e7737c7782d37fb18dab",
"assets/assets/cutscenes/archive_ash/archive_ash_p1.webp": "30878392bb7e37ed4deb7f026f72330e",
"assets/assets/cutscenes/memory2/memory2.json": "875f9ee2436c91615aa7f66973d48437",
"assets/assets/cutscenes/memory2/memory2_p1.webp": "e4f4ba4c6d386844d6f457a52765c5cc",
"assets/assets/cutscenes/memory2/memory2_p3.webp": "7d9f9d657d767230b7ed086a58c8d187",
"assets/assets/cutscenes/memory2/memory2_p2.webp": "ad4d62ea11bb4190fe7fa42a06fa3fe2",
"assets/assets/cutscenes/awakening/awakening_p5.webp": "e31ce500012498a86b41793100916c92",
"assets/assets/cutscenes/awakening/awakening.json": "bbd1221fd8f7e4aad7381385bdb21148",
"assets/assets/cutscenes/awakening/awakening_p1.webp": "1645052609145918b7d62cfc32190aaa",
"assets/assets/cutscenes/awakening/awakening_p3.webp": "932681c1375f1126753380424223eae6",
"assets/assets/cutscenes/awakening/awakening_p4.webp": "5a920ef41ce0252e1974a77479e017e4",
"assets/assets/cutscenes/awakening/awakening_p2.webp": "4bac91c35f6fbb72d5ac172e3a5e5395",
"assets/assets/cutscenes/after_sentinel/after_sentinel.json": "686a39acb5eecec512368152e06077d2",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p1.webp": "2a624c954c66bc1369e593813c119562",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p2.webp": "2f2e78236e52d87515c35457602d4a64",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p3.webp": "b2935175cc062aba742f1f14c8dddf68",
"assets/assets/cutscenes/ending_b/ending_b_p1.webp": "11ae68e754356c28f0181b433f059ab1",
"assets/assets/cutscenes/ending_b/ending_b.json": "2d80656c7565db0a190687bcf18e700b",
"assets/assets/cutscenes/ending_b/ending_b_p3_glow.webp": "6be89e51b3c44a60b078e9bdd6b3e788",
"assets/assets/cutscenes/ending_b/ending_b_p2.webp": "5578f4c291c2104b8a5509357e821d26",
"assets/assets/cutscenes/ending_b/ending_b_p3.webp": "589d9aff13f041c7b4938752e6d98663",
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
"assets/assets/cutscenes/memory5/memory5_p2.webp": "53978dca8ce616dfe4d36f485bf6b93d",
"assets/assets/cutscenes/memory5/memory5_p4.webp": "ee344f7855c16d4d92d235c18988e49e",
"assets/assets/cutscenes/memory5/memory5.json": "f19af6cbf6d8eedb419360a126ddb1e5",
"assets/assets/cutscenes/memory5/memory5_p1.webp": "c523a224bcef85192b82d2cf3904e395",
"assets/assets/cutscenes/ending_a/ending_a_p3.webp": "42165d4aa5fd93f223b22c283bed3329",
"assets/assets/cutscenes/ending_a/ending_a.json": "1b7bad3ad8e325f7f05ef27c0cdf91bf",
"assets/assets/cutscenes/ending_a/ending_a_p2.webp": "8bdc0e959faf4aa8c915e9f120a3cecd",
"assets/assets/cutscenes/ending_a/ending_a_p1.webp": "10f6df1aa6958efc8c168980ea27dda6",
"assets/assets/cutscenes/ending_a/ending_a_p4.webp": "7de527102fb9837e4f47ce417f89a24c",
"assets/assets/cutscenes/ending_a/ending_a_p5.webp": "ee6725fceadc8cf70b5717cbdf8f3a22",
"assets/assets/images/maps/cyberpunk-mask.png": "e5fd6b4d29abab79d47fc2ef9fea6f0d",
"assets/assets/images/maps/city-texture.png": "479f232727113d5d3d03346674eace23",
"assets/assets/images/maps/world4.tmj": "f2949fe151e84b33a7e197a3a8d07926",
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
"assets/assets/images/maps/world3.tmj": "32c9b4d95c698eefc11d9353e8c1c9d3",
"assets/assets/images/maps/tilesets/city.png": "af96fdd8977dc476b082a0d9ae707d2e",
"assets/assets/images/maps/tilesets/cyberpunk.png": "6cecf88855f4b198d91899787e805ded",
"assets/assets/images/maps/tilesets/core.png": "716ba600f0ee38c6fe96d85d962b824a",
"assets/assets/images/maps/tilesets/woods.png": "bb6b16cae122d6a025c7bcfe98a9e8af",
"assets/assets/images/maps/world.tmj": "5500943899259307d6268e687d6ec9ca",
"assets/assets/images/maps/Starter-map.png": "75dfc98b4c5b139945de717de0928c18",
"assets/assets/images/maps/world5.tmj": "7d2be66e2bc8753ccfa05b1cdefc045a",
"assets/assets/images/maps/world2.tmj": "5bd6340bc5796804ed535a4805042f29",
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
"assets/assets/images/interiors/tea_house.json": "6c35cd6352663c550d3f863518a65068",
"assets/assets/images/interiors/pond_grotto.json": "50d21e6ad12dc1c569078d1d701c9994",
"assets/assets/images/interiors/pond_grotto.png": "8702e6d6e5c3b3fc811ea7a8fa9bb5fb",
"assets/assets/images/interiors/ranger_cabin.json": "e9e77f03504d9f42371727ed0efadbbb",
"assets/assets/images/interiors/archive_library.png": "4efd8e073cec9733af8ca697927e1413",
"assets/assets/images/interiors/tea_house.png": "eb4bbb8cfceb6fbb770c46254813196a",
"assets/assets/images/interiors/archive_library.json": "0a704d118bbd6d4487d54636f99c3b23",
"assets/assets/images/interiors/noodle_shop.json": "b155ee96b12f0bbafa158fd0aea8de2d",
"assets/assets/images/interiors/ranger_cabin.png": "f96aa7c9c4e007c3c2f2bd851c4f6808",
"assets/assets/images/interiors/README.md": "a014c16c07281c2a53e8475e740c9538",
"assets/assets/images/interiors/noodle_shop.png": "1cd38cc2024c12ea9d6fb3b50d17b028",
"assets/assets/images/interiors/tileset.png": "2e9cfe43744b617a5b15c28b7cd21dce",
"assets/assets/images/sprites/fragment.png": "f626f5e9925db098346ea073faefe0bf",
"assets/assets/images/sprites/uec_swarm_hover.json": "a37f9049d610cac2e80f0fc18529df43",
"assets/assets/images/sprites/mira_walk.json": "44284a8596f95c79a64e9d6e812b1009",
"assets/assets/images/sprites/player.png": "fe690857d46f825c9d465834cfc9b531",
"assets/assets/images/sprites/dao_walk.png": "fb195265fcfd4c2fe065a109828e2ad3",
"assets/assets/images/sprites/uec_sniper_hover.png": "8d6a8513c2c7e899319cbc9cd66ee7cd",
"assets/assets/images/sprites/bullet.png": "a55e7a9ecc7f64f94717061688db50fd",
"assets/assets/images/sprites/uec_shield_hover.json": "5d6dfcc5683667a5718ecbf86e530d0c",
"assets/assets/images/sprites/npc_archivist.png": "a636f268f752948bcb1712e98a3b0181",
"assets/assets/images/sprites/enemy_ship.png": "63b2564dd2d3c1f1676fccc8e1e139e0",
"assets/assets/images/sprites/kaela_walk.png": "bf859d5cc2833f7abf9c0c5f993137ac",
"assets/assets/images/sprites/npc_voss.png": "6b31c91d7e7f2a43a2c41c975f442c7a",
"assets/assets/images/sprites/gaia_walk.png": "c0dca37bbefc5d7b8e4c5478fd356b92",
"assets/assets/images/sprites/echo7_walk.png": "dbedbfee770e8896cbefba2010aa924b",
"assets/assets/images/sprites/uec_drone.png": "47ac4db9178eb493fa9d38bf3183f949",
"assets/assets/images/sprites/uec_shield.png": "0d2ec7423f3d4165f230bec151a66ab2",
"assets/assets/images/sprites/npc_gaia.png": "0f7a767dae6a412e8ca4a75f6e210da6",
"assets/assets/images/sprites/npc_wen.png": "d53b3ab7b9938987356542b32208947f",
"assets/assets/images/sprites/uec_swarm_hover.png": "931caa4f3f31698d4776596bd58f47dc",
"assets/assets/images/sprites/fx/steam_loop.png": "68c2b54854a37dcf0a37ffc79a2872dd",
"assets/assets/images/sprites/fx/smoke_loop.png": "ce1ea3d9cb687919d483e71cf9690452",
"assets/assets/images/sprites/fx/smoke_loop.json": "2001c047b5974cd24401213b1554fc01",
"assets/assets/images/sprites/fx/steam_loop_cyan.png": "959f610889329e55380d63457dc2d8fd",
"assets/assets/images/sprites/fx/lamp_light_flicker.png": "f721ad5c151093e122758cb0fcc3bb05",
"assets/assets/images/sprites/fx/lamp_light.png": "e9d4ca76d38f3670bd8a4d194ca68052",
"assets/assets/images/sprites/fx/steam_loop_cyan.json": "e8754abe36418ef21ec28e73b5562b2d",
"assets/assets/images/sprites/fx/mist_loop.png": "6860fe236f067558de3eb94b55b9dd2d",
"assets/assets/images/sprites/fx/lamp_light_neon.png": "90b0567218384db01fcf602031dd33c4",
"assets/assets/images/sprites/fx/steam_loop.json": "c7209106840840a8018b2d3239ffa5aa",
"assets/assets/images/sprites/fx/README.md": "ccb6cfdd319cf7138e91b4a7b3c5b769",
"assets/assets/images/sprites/fx/mist_loop.json": "514654f30b093d0266090189fe35bdb1",
"assets/assets/images/sprites/fx/fire_loop.png": "e5e1c9bb14304695992a2520f09efa1d",
"assets/assets/images/sprites/fx/fire_loop.json": "5fdf2265f04518d0f7d8f75591c91f43",
"assets/assets/images/sprites/fx/lamp_light_neon_flicker.png": "2f0f0c46333ea0e08af020a35476fd07",
"assets/assets/images/sprites/uec_shield_hover.png": "7f3d5553dae8e7b5883845bb633cf912",
"assets/assets/images/sprites/items/archive_seal_drop_sparkle.json": "b1a2eba0f4b6828c507b1c3f8d4c065c",
"assets/assets/images/sprites/items/ruins_gate_key_drop.png": "a57a18248e9e4fa1c1c0014d47249eea",
"assets/assets/images/sprites/items/ruins_gate_key.png": "e482e3f935ff94104a6b72164092bc18",
"assets/assets/images/sprites/items/moonflower_bloom_drop.png": "d54b18465acb58aa67233741862f8b42",
"assets/assets/images/sprites/items/uec_override.png": "c7a3e43dd80d9a9a3cd0b9dd23e4fe45",
"assets/assets/images/sprites/items/sweetroot_drop_sparkle.png": "f4f59acb13210234281c87cc6a599d03",
"assets/assets/images/sprites/items/uec_override_16.png": "322102aeb4dd9884a13ccf90d42d56d2",
"assets/assets/images/sprites/items/archive_seal_drop_sparkle.png": "4d7b78edc1b0359d2a01c0234588eaa1",
"assets/assets/images/sprites/items/ruins_gate_key_drop_sparkle.png": "91d1f8e61ebe7e7c0b9583b8a3a54532",
"assets/assets/images/sprites/items/uec_override_drop_sparkle.png": "ea5b45bc5b880a58e4bd19d0fad03862",
"assets/assets/images/sprites/items/moonflower_bloom_drop_sparkle.png": "e4161beded001afe01181b3ad4a6fb97",
"assets/assets/images/sprites/items/ruins_gate_key_drop_sparkle.json": "de4b2cf3d2d8b16cb13dd203c4c10a1f",
"assets/assets/images/sprites/items/archive_seal_drop.png": "0cdbb3de329d637573cdc49b98c2747a",
"assets/assets/images/sprites/items/moonflower_bloom_drop_sparkle.json": "d9b405e0fb59bd3e8439f62914d0f480",
"assets/assets/images/sprites/items/moonflower_bloom_16.png": "cfb3d38903e57d018c2628b67121d719",
"assets/assets/images/sprites/items/uec_override_drop.png": "480ef086f0fb5d96eba5366ab10698e8",
"assets/assets/images/sprites/items/sweetroot_16.png": "27053ecacc134ccf8e7a80f5d090fffe",
"assets/assets/images/sprites/items/sweetroot_drop.png": "b54bd50715850d1f3c65416e7d5b062e",
"assets/assets/images/sprites/items/archive_seal_16.png": "38d9d08e81d4a8425db7e93f4f7cf84c",
"assets/assets/images/sprites/items/uec_override_drop_sparkle.json": "d71dbf94bb41a9a676e664c07734ce00",
"assets/assets/images/sprites/items/moonflower_bloom.png": "39998a7ae5a81d2212de1e8eb666a8d1",
"assets/assets/images/sprites/items/sweetroot.png": "90ac621899ba4380fd846780e3109446",
"assets/assets/images/sprites/items/ruins_gate_key_16.png": "a04ba90ef3c18a7e214054f3fd807050",
"assets/assets/images/sprites/items/sweetroot_drop_sparkle.json": "eb3ebc36e2daf58080d6b900c00f3aa5",
"assets/assets/images/sprites/items/archive_seal.png": "dc1e84d03913b7532de0aa7d80fbd419",
"assets/assets/images/sprites/uec_swarm.png": "f17ba18eeda17c49feb9f083eed48ed4",
"assets/assets/images/sprites/asha_walk.png": "506a8ebeea436d049cb2b83ab90cf9f8",
"assets/assets/images/sprites/kaela_shoot.png": "105a1411a2ab2bc5dcaf0bb4ca36a18c",
"assets/assets/images/sprites/npc_ferro.png": "b584fc9ba9bf9478074b23d202a7e3f1",
"assets/assets/images/sprites/npc_asha.png": "80044055c567b03ac332a173b45fb5cc",
"assets/assets/images/sprites/uec_sniper.png": "a55b759eb27793f1f09a05ae15d2e757",
"assets/assets/images/sprites/kaela_jog.png": "19528c81fc906e47375b507339465729",
"assets/assets/images/sprites/ferro_walk.png": "33f99cc6ca63521158c949cd673477bf",
"assets/assets/images/sprites/voss_walk.png": "62699b160b91b0ae09cd56b8fac57ec8",
"assets/assets/images/sprites/health_pickup.png": "2c75907b2644728ff477f8a03fad8c1f",
"assets/assets/images/sprites/uec_scout.png": "40e818019952f6dcc7aaec956a697749",
"assets/assets/images/sprites/explosion.png": "c7d2f9dcc3d91541b300d968b258bc47",
"assets/assets/images/sprites/mira_walk.png": "45cd7afc9fd19720cd833f1501cbbd53",
"assets/assets/images/sprites/uec_scout_hover.png": "4443fb058121869374bb29eba72e0084",
"assets/assets/images/sprites/asteroid.png": "f9e87f65c27df622b0f3f77a64036879",
"assets/assets/images/sprites/uec_scout_hover.json": "0bffa00a729976d23ca1cba4e34bd118",
"assets/assets/images/sprites/npc_mira.png": "f30fd9b37a80cc58bb4e54ef26a84d76",
"assets/assets/images/sprites/uec_sniper_hover.json": "ec3e9026a90aa4d3cd1e4c5f57fbff55",
"assets/assets/images/sprites/archivist_walk.png": "14d80f52606222e92cca8e79f9470abc",
"assets/assets/images/sprites/obstacles/story_gate.png": "ba9384131aa392d8a743e779eb7a203d",
"assets/assets/images/sprites/obstacles/story_gate_pulse.png": "efcfdcac8467777bed909d87dd4da3ad",
"assets/assets/images/sprites/obstacles/story_gate_open.png": "820646e68f8f98f22e6eaf2846aaad51",
"assets/assets/images/sprites/sentinel_boss.png": "28a4548f6e887d2ba76c937ce86c88e8",
"assets/assets/images/sprites/npc_echo7.png": "a33e8da2537d953e8e7635d862092ba4",
"assets/assets/images/sprites/npc_dao.png": "287aaed0dadbaf5abbe9f0db994b0b78",
"assets/assets/images/sprites/wen_walk.png": "504805ea1853c85fd5a875af8e9a5118",
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
"assets/assets/images/obstacles/pond_grotto_dark.png": "2d29a678f3ad01bc422037dbfc30555f",
"assets/assets/images/obstacles/bramble_open.json": "74140044d4446c67ff17b18492d14abf",
"assets/assets/images/obstacles/pond_grotto.json": "f330d933f03ac2114b09dc8e445249d0",
"assets/assets/images/obstacles/bramble_closed.png": "28bbdd0485ea5b91f9a9a2b7a2d2f960",
"assets/assets/images/obstacles/woods_south_exit_locked.png": "2473c56e041042b9b1e61bf9cf11c51b",
"assets/assets/images/obstacles/pond_grotto_lit.png": "863956665b9d094f5c5c5f750bbfea66",
"assets/assets/images/obstacles/boulder_push_anim.png": "bf6a1ce2ec170c300bf6eff2cfab2d6f",
"assets/assets/images/obstacles/light_mask.png": "c2eb2e23cd4bd508091a5b8585210b9a",
"assets/assets/images/obstacles/bramble_open.png": "1c60f6822b97b6b9b2d195f1c7a9be37",
"assets/assets/images/obstacles/fetch_sparkle_anim.png": "99c9acef704c48e353a82a5560c59e09",
"assets/assets/images/obstacles/road_boulder_open.png": "832c11ce6d0b84f7493f427dd663a23a",
"assets/assets/images/obstacles/boulder.png": "40ae3892c2000e4ed25d5304abbf415f",
"assets/assets/images/obstacles/road_boulder_closed.png": "a9577170f8035371fe5e4171f3ac9eae",
"assets/assets/images/obstacles/glyph.png": "74fb9ac6e7315b79d0025b0d372e0062",
"assets/assets/images/obstacles/darkness_overlay.png": "79fb4f77f11d7d0492d612036407166d",
"assets/assets/images/obstacles/road_boulder_roll_anim.json": "b4552251595cacf75819d043b1003751",
"assets/assets/images/obstacles/sweetroot_stump_plain.png": "8bfdef75d4511c954cdeb03e0bbd11b2",
"assets/assets/images/obstacles/boulder_2x2.png": "abbbdb910f765a99a21d4a254f8f6e9c",
"assets/assets/images/obstacles/shimmer_anim.png": "1b3cc356b6d87fbf35efe98af28979fe",
"assets/assets/images/obstacles/shimmer.png": "ce062550a8e2b30aca54bfba5ad8e388",
"assets/assets/images/obstacles/sweetroot_stump.png": "8fcf59f977eb0ec23e2aabef357cb877",
"assets/assets/images/obstacles/chest_plain.png": "cee8f53696b67178fffbe68a28af3895",
"assets/assets/images/obstacles/woods_south_exit_open.png": "74ac0f0c5901320932d9e3c0c79dd178",
"assets/assets/images/obstacles/bramble_closed.json": "898e3dfa1618ad3cf027ff1fcda7cc2c",
"assets/assets/images/obstacles/road_boulder_roll_anim.png": "efea6448874433f6fdfece8ee920b7c1",
"assets/assets/images/obstacles/bramble_open_motes_anim.png": "8391dcb4536040438cfef7c33b424d7c",
"assets/assets/images/obstacles/road_boulder.json": "a3fa87586d8cd57a93c683ebba626c69",
"assets/NOTICES": "40cfc49a1216135bcde0aa3b14c55c98",
"assets/AssetManifest.bin": "46c1a821bcbb4039e74a859a9cc778dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "cbf81ada494b230c0f14508f3c192b88",
"index.html": "682d711ea07992bef3d7ab8015d89322",
"/": "682d711ea07992bef3d7ab8015d89322",
"version.json": "38c3e53387fadcb91b2ecfe9ef768d5d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3d9849baea84eae01c239d604c225d11",
"main.dart.js": "db444bab1077ad8ad51e25a9bb26dbd0",
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
