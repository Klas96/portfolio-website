'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "3969b238492e1fe85719996a3a0455b3",
"icons/Icon-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"icons/Icon-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"flutter_bootstrap.js": "ebae8eb7ab264b2d3686f83fc97d65c7",
"assets/AssetManifest.bin.json": "08cdeae3014fc01761bd884647d31c70",
"assets/AssetManifest.json": "9c6017c6f4b090991203649691007479",
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
"assets/assets/audio/voices/gaia_core_archive.mp3": "e0751c28d526c779ec2c18d32ee848ce",
"assets/assets/audio/voices/voss_refuse_short.mp3": "572461495b2e31cec113ef95dbfc9a06",
"assets/assets/audio/voices/cut_ending_a_p4_l2.mp3": "2fb98312d18cea639a3e2eee3ac67593",
"assets/assets/audio/voices/archivist_1.mp3": "6a767814bc7fb7367dc5b6798cfb49f7",
"assets/assets/audio/voices/gaia_core_child.mp3": "2c3432b592aa27e0ce0dc25166dafe47",
"assets/assets/audio/voices/cut_memory4_p1_l1.mp3": "7fc5fd903b6f80c4545cb3a678d0b4ad",
"assets/assets/audio/voices/gaia_core_short.mp3": "4a1ac02ee6655fdee362ac2c24074897",
"assets/assets/audio/voices/mira_archive.mp3": "b2be0763f8f6c7c66481e13ec57962bd",
"assets/assets/audio/voices/cut_memory3_p2_l1.mp3": "dea76859191646621bbfca0937033a0d",
"assets/assets/audio/voices/cut_archive_ash_p2_l1.mp3": "ae72f9ad3e2f68c8c4ee2abb459fd142",
"assets/assets/audio/voices/cut_memory2_p3_l1.mp3": "94ba5100c84a56add140ae33c751f222",
"assets/assets/audio/voices/asha_archive_3.mp3": "28e0b28eaea515a29b43d9e1a8ab9632",
"assets/assets/audio/voices/asha_archive_2.mp3": "de2041e728dd037b156bf0be839fb374",
"assets/assets/audio/voices/archivist_post_1.mp3": "b65c1cdc018bd186d258706cf3d9d160",
"assets/assets/audio/voices/gaia_3.mp3": "126dc8576e3bd9745f423dd829e550b3",
"assets/assets/audio/voices/echo7_2.mp3": "1be764c973ffa88959e6504b50f81a65",
"assets/assets/audio/voices/cut_memory2_p2_l1.mp3": "02867cf9c9e1187c584e941cc27b8c1b",
"assets/assets/audio/voices/gaia_ask_1.mp3": "48ae0db79d2499622a126a1f42b663e3",
"assets/assets/audio/voices/cut_awakening_p3_l1.mp3": "1bbad4a4b352569cc4add9586ce062ac",
"assets/assets/audio/voices/cut_ending_a_p5_l1.mp3": "25aaca19f76d62d17d6eff202227b068",
"assets/assets/audio/voices/gaia_ask_2.mp3": "1254d5f8d1ab93432dc30d383d94a155",
"assets/assets/audio/voices/asha_3.mp3": "0a233a0a32e08267a2c603fd40172e6c",
"assets/assets/audio/voices/voss_refuse.mp3": "b84a017bb6c47cc59e790317a853d6fb",
"assets/assets/audio/voices/cut_awakening_p4_l1.mp3": "3c5cb5b8749a6b550eecd90aac2f52c0",
"assets/assets/audio/voices/cut_ending_a_p2_l1.mp3": "4d250d3b5f5e05a65a1191e64e61333a",
"assets/assets/audio/voices/cut_ending_b_p1_l1.mp3": "66542cd18c3472737816785849d85528",
"assets/assets/audio/voices/cut_memory4_p3_l2.mp3": "09e39d851053b06f60455656f7f576fb",
"assets/assets/audio/voices/asha_key_1.mp3": "5c2a4722dd0b8780411b0ad00f42aba7",
"assets/assets/audio/voices/archivist_s7.mp3": "7a7a6469ce6ab6369e8ed617933cc187",
"assets/assets/audio/voices/cut_awakening_p2_l1.mp3": "f755297b330ad13c2d278e3b542dbb2b",
"assets/assets/audio/voices/cut_after_sentinel_p2_l2.mp3": "18bef509395208863007e6695b975714",
"assets/assets/audio/voices/asha_give_1.mp3": "b470d4913e6685abe594a083a98ccc1f",
"assets/assets/audio/voices/cut_coalition_p1_l1.mp3": "c457905cc1c8cfe7ade8b1bc19a5d921",
"assets/assets/audio/voices/cut_memory2_p1_l1.mp3": "d92690a18f0f4556f11458ab84450053",
"assets/assets/audio/voices/archivist_seal_give.mp3": "306422bb2894cee3f349d815e16415bb",
"assets/assets/audio/voices/cut_memory3_p3_l2.mp3": "6cabc0617b32b9202a00e4ebbad7b6cf",
"assets/assets/audio/voices/cut_after_sentinel_p2_l1.mp3": "35e2651549eebf527aebcf99a3786129",
"assets/assets/audio/voices/asha_key_2.mp3": "1b079ddd64f459852870a52b94c52db0",
"assets/assets/audio/voices/cut_memory1_p2_l1.mp3": "31f45bdcd3cdc9cea9f6f40e3a06e58c",
"assets/assets/audio/voices/echo7_1.mp3": "d5366d4775c6f2b27c4bd606231c763d",
"assets/assets/audio/voices/echo7_fear.mp3": "d1e304078c66690f31f0fa951fe9ae42",
"assets/assets/audio/voices/mira_2.mp3": "2c3793a2093e858d297770dd4d997a3d",
"assets/assets/audio/voices/cut_ending_a_p1_l1.mp3": "f34c48e4498007e75c46e5a479778362",
"assets/assets/audio/voices/cut_ending_b_p3_l1.mp3": "a71bfa633b6d922a5843ec02a8daccf0",
"assets/assets/audio/voices/archivist_after_1.mp3": "d6cc02960faa287d114b792feb5e824c",
"assets/assets/audio/voices/cut_coalition_p4_l1.mp3": "b0966444615f9cc5796f96f0f17196ae",
"assets/assets/audio/voices/voss_1.mp3": "c350de69220713e1f921a72e6fd19e9a",
"assets/assets/audio/voices/cut_archive_ash_p2_l2.mp3": "7950604dfa5be311a03867a5e6a3d54f",
"assets/assets/audio/voices/archivist_3_seal.mp3": "17c466987627fce101a91c51182dac5a",
"assets/assets/audio/voices/gaia_core_1.mp3": "644595a8dd4a59a80e07085e7e50e01e",
"assets/assets/audio/voices/gaia_2.mp3": "44cfd0e5accd323676e3d93c8d8a5916",
"assets/assets/audio/voices/mira_board.mp3": "2de898c121e1f2f0defc677d87d07c44",
"assets/assets/audio/voices/cut_memory5_p4_l3.mp3": "e3f2cae0767fde047604a9f0314c7e98",
"assets/assets/audio/voices/mira_1.mp3": "e81e32f901dddf6801b879d36fb88b4c",
"assets/assets/audio/voices/cut_coalition_p2_l1.mp3": "dbe183fc2888f9c185e988c80b61e4d0",
"assets/assets/audio/voices/archivist_post_3.mp3": "bfaba9daab1fe33bccde76abedcadf1f",
"assets/assets/audio/voices/asha_1.mp3": "b2296e09ee34c8f0d5b89a23782c8ef4",
"assets/assets/audio/voices/gaia_core_2.mp3": "f007d93c41fa7ef7f7d400b56536993e",
"assets/assets/audio/voices/echo7_promise.mp3": "395fed526f6ffbaef58b2cc8ea11779c",
"assets/assets/audio/voices/voss_2.mp3": "21d7cb613f0ca1b5de945cd3ee6df623",
"assets/assets/audio/voices/archivist_after_2.mp3": "cb4cc04579e63b569c3de6e0db9710de",
"assets/assets/audio/voices/cut_memory5_p4_l1.mp3": "446989b961420ad411c47b29cd7c42ec",
"assets/assets/audio/voices/voss_3.mp3": "8b28d759db19559de80cbcae517766a6",
"assets/assets/audio/voices/cut_awakening_p5_l1.mp3": "f9c15b99f657a08d9319bf66c6661a76",
"assets/assets/audio/voices/cut_memory5_p2_l1.mp3": "7f567ea8f5b1d05e444418148bf49a64",
"assets/assets/audio/voices/cut_after_sentinel_p1_l1.mp3": "b96501d2e06f47dbe9bccd67062b3b77",
"assets/assets/audio/voices/gaia_1.mp3": "c88be7cb85ec9147be802a4f175c5feb",
"assets/assets/audio/voices/asha_archive_1.mp3": "bed788689e1c75753f74a59bc7153629",
"assets/assets/audio/voices/voss_why.mp3": "0bb89fb1a659b2944e77feb8afbd415b",
"assets/assets/audio/voices/asha_2.mp3": "9bcabece54e82936c7a91e8bf660a8b8",
"assets/assets/audio/voices/voss_orders_2.mp3": "aab62ae4404aa392447f27b51014e12d",
"assets/assets/audio/voices/cut_memory1_p3_l1.mp3": "aeae5cb87343d1ef3357278a2fb2df7e",
"assets/assets/audio/voices/cut_ending_a_p3_l1.mp3": "2f304ae2f0605197fac49e7066b85b41",
"assets/assets/audio/voices/cut_coalition_p4_l3.mp3": "dc1f9df630519dbbeaf9285e34ed16c8",
"assets/assets/audio/voices/archivist_3.mp3": "29288baa6efc894c4ab75a43f5d7adf8",
"assets/assets/audio/voices/gaia_core_voss.mp3": "b90a20927420eb4775ba519b5c73bc05",
"assets/assets/audio/voices/voss_orders_3.mp3": "0c34c262539b47ad8d3173a7f39b58ea",
"assets/assets/audio/voices/cut_memory3_p1_l1.mp3": "0809a51eba0b6adb66902c5ba4d5957e",
"assets/assets/audio/voices/voss_confront_2.mp3": "637da478871711b66e2c113d881a1c00",
"assets/assets/audio/voices/cut_after_sentinel_p2_l3.mp3": "fdc785b6e04f5bc1ceb99b6a3ef5f884",
"assets/assets/audio/voices/archivist_post_ready.mp3": "69cb10c8d5abfa65729dff73c76db13b",
"assets/assets/audio/voices/cut_after_sentinel_p3_l1.mp3": "750ad1adadbdbc45b5a8dc75c85b56f0",
"assets/assets/audio/voices/cut_coalition_p3_l2.mp3": "2e3bccd1db79b08455ada7857a4343cf",
"assets/assets/audio/voices/archivist_post_2.mp3": "6213c01c8a857f15b01cd73d9c10bb00",
"assets/assets/audio/voices/gaia_remember_2.mp3": "5a6b7de314f452cfc0624271907884de",
"assets/assets/audio/voices/cut_awakening_p1_l1.mp3": "3eee4c28e53bc01a87696c44e480b52b",
"assets/assets/audio/voices/asha_give_2.mp3": "58bc19e09847ab983989141c53a369b1",
"assets/assets/audio/voices/archivist_2.mp3": "0e80641f5fba836a063209e679de4903",
"assets/assets/audio/voices/cut_ending_b_p3_l2.mp3": "afef753676a6e820f4c56f094be0ca5e",
"assets/assets/audio/voices/cut_memory5_p3_l1.mp3": "08c8af0d5da931f56847e85a21120ab0",
"assets/assets/audio/voices/cut_archive_ash_p3_l2.mp3": "fb23e7c65978ca1f41ce16c40ebd5481",
"assets/assets/audio/voices/cut_ending_b_p2_l2.mp3": "d5274c10f442733c1a2018b9882403a6",
"assets/assets/audio/voices/cut_coalition_p3_l1.mp3": "0990dad456f92f36c699be33f2da8ab5",
"assets/assets/audio/voices/cut_memory4_p2_l1.mp3": "02c05972681a4f6a987da36fa94bff1f",
"assets/assets/audio/voices/archivist_post_seal.mp3": "53351d2acdba4718d112181273e4eee7",
"assets/assets/audio/voices/voss_confront_1.mp3": "2975f06b60d43d80dcb221a2639bef89",
"assets/assets/audio/voices/asha_trust.mp3": "418bbcbe2deb5f222656d0c2f5993537",
"assets/assets/audio/voices/cut_coalition_p4_l2.mp3": "4f6a06e35103d6aaa9c0e2a4356299e4",
"assets/assets/audio/voices/cut_ending_b_p2_l1.mp3": "a70c3c508070a0d864004bb31810fec5",
"assets/assets/audio/voices/cut_archive_ash_p1_l1.mp3": "fe2baa948446fc4d9f1acaf4e4496ae5",
"assets/assets/audio/voices/cut_memory2_p3_l2.mp3": "91a625586fe62cabf9803e13d255d8a2",
"assets/assets/audio/voices/cut_memory5_p1_l1.mp3": "894806f379b6baeabe8bf8657fb40e57",
"assets/assets/audio/voices/gaia_core_found.mp3": "7ad43a0e6f40b5f02675e10d28d55053",
"assets/assets/audio/voices/gaia_core_m5.mp3": "a148b85821d6d486a83d494b71871764",
"assets/assets/audio/voices/cut_memory3_p3_l1.mp3": "f734b3b00edf55f2d7cc98369aa0e8c8",
"assets/assets/audio/voices/mira_3.mp3": "8033354f29391c72ee2db85d3be99107",
"assets/assets/audio/voices/asha_orders_2.mp3": "29fa9d02ea8e9bea67e316ad3c774c66",
"assets/assets/audio/voices/cut_memory4_p3_l1.mp3": "1929972c1c87655b7b265f712449b57b",
"assets/assets/audio/voices/asha_orders_1.mp3": "c1edac95b4e78d78a637d96ed4115e98",
"assets/assets/audio/voices/cut_archive_ash_p3_l1.mp3": "bc601d32c15a69d55a743e36228fe61a",
"assets/assets/audio/voices/voss_orders_1.mp3": "c16f4a7a61f854dc6b84cc318a13dec7",
"assets/assets/audio/voices/cut_coalition_p3_l3.mp3": "30531e8801abb211b2fc72f2a1e9c805",
"assets/assets/audio/voices/gaia_core_orders.mp3": "734d150e5684e7772ce1c24c85fb7cfc",
"assets/assets/audio/voices/echo7_3.mp3": "dc0ee523440c873765523a440713898f",
"assets/assets/audio/voices/cut_memory5_p4_l2.mp3": "a026db055f66df1fd708a1887855ba3c",
"assets/assets/audio/voices/gaia_remember_1.mp3": "f72cbd7526871df7b287f647541d3524",
"assets/assets/audio/voices/cut_ending_a_p4_l1.mp3": "96fbb9bb2d42b4fc429e3a01d7c3ea7d",
"assets/assets/audio/voices/asha_archive_ack.mp3": "5649733b901d7b7ad5a5ca88d682f54b",
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
"assets/assets/cutscenes/archive_ash/archive_ash_p3.webp": "5be92ba233c9c146ee0498019e54800d",
"assets/assets/cutscenes/archive_ash/archive_ash.json": "141f20f8dab2c10916045d7256015c0f",
"assets/assets/cutscenes/archive_ash/archive_ash_p2.webp": "e80b750cefb3e7737c7782d37fb18dab",
"assets/assets/cutscenes/archive_ash/archive_ash_p1.webp": "30878392bb7e37ed4deb7f026f72330e",
"assets/assets/cutscenes/memory2/memory2.json": "875f9ee2436c91615aa7f66973d48437",
"assets/assets/cutscenes/memory2/memory2_p1.webp": "e4f4ba4c6d386844d6f457a52765c5cc",
"assets/assets/cutscenes/memory2/memory2_p3.webp": "7d9f9d657d767230b7ed086a58c8d187",
"assets/assets/cutscenes/memory2/memory2_p2.webp": "ad4d62ea11bb4190fe7fa42a06fa3fe2",
"assets/assets/cutscenes/awakening/awakening_p5.webp": "2ba08449e2dd9de635da6ce36ba4da1a",
"assets/assets/cutscenes/awakening/awakening.json": "909a8649eb688c60fdd1c7cf3ba4ce4e",
"assets/assets/cutscenes/awakening/awakening_p1.webp": "3bcc96ea970a87620809ffd68274ca5d",
"assets/assets/cutscenes/awakening/awakening_p3.webp": "a1835845fcb67f700fede3adc1d0483e",
"assets/assets/cutscenes/awakening/awakening_p4.webp": "5fc0d11c5574bf2bfdefb000924410f1",
"assets/assets/cutscenes/awakening/awakening_p2.webp": "7ec6e2ad299d22b8513f13a9dc399856",
"assets/assets/cutscenes/after_sentinel/after_sentinel.json": "686a39acb5eecec512368152e06077d2",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p1.webp": "c8000d8aadcf1846e4c584f7c3c6447b",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p2.webp": "c0039ffd8433de5e4cb8b1569cfbbaaf",
"assets/assets/cutscenes/after_sentinel/after_sentinel_p3.webp": "b2935175cc062aba742f1f14c8dddf68",
"assets/assets/cutscenes/ending_b/ending_b_p1.webp": "11ae68e754356c28f0181b433f059ab1",
"assets/assets/cutscenes/ending_b/ending_b.json": "e390f18d6af474b2292f190f45ba1263",
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
"assets/assets/cutscenes/ending_a/ending_a.json": "1cc7ea103594e7460550cffc8c999fe7",
"assets/assets/cutscenes/ending_a/ending_a_p2.webp": "8bdc0e959faf4aa8c915e9f120a3cecd",
"assets/assets/cutscenes/ending_a/ending_a_p1.webp": "10f6df1aa6958efc8c168980ea27dda6",
"assets/assets/cutscenes/ending_a/ending_a_p4.webp": "7de527102fb9837e4f47ce417f89a24c",
"assets/assets/cutscenes/ending_a/ending_a_p5.webp": "ee6725fceadc8cf70b5717cbdf8f3a22",
"assets/assets/images/maps/cyberpunk-mask.png": "e5fd6b4d29abab79d47fc2ef9fea6f0d",
"assets/assets/images/maps/city-texture.png": "479f232727113d5d3d03346674eace23",
"assets/assets/images/maps/world4.tmj": "2a9fe85c58733ff34ecba7417efc2dab",
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
"assets/assets/images/maps/world3.tmj": "dec54fa8e0ec7cc4e200eac439ddcf16",
"assets/assets/images/maps/tilesets/city.png": "af96fdd8977dc476b082a0d9ae707d2e",
"assets/assets/images/maps/tilesets/cyberpunk.png": "6cecf88855f4b198d91899787e805ded",
"assets/assets/images/maps/tilesets/core.png": "716ba600f0ee38c6fe96d85d962b824a",
"assets/assets/images/maps/tilesets/woods.png": "0f87f564ec1fcc4eed23b4fcfdbc6fa8",
"assets/assets/images/maps/world.tmj": "1531d20a9d9de188f9690a4fb2e396bc",
"assets/assets/images/maps/Starter-map.png": "75dfc98b4c5b139945de717de0928c18",
"assets/assets/images/maps/world5.tmj": "abcbe1a67cd7458b7b5926c999b55b63",
"assets/assets/images/maps/world2.tmj": "3b4cb5d5cec6c9db707c86946c202eaf",
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
"assets/assets/images/interiors/tea_house.json": "2ccc9a5b0f7d05ace5ce77e50a08ccdc",
"assets/assets/images/interiors/ranger_cabin.json": "87e95b73d96b09a1267052ebc01ddb9a",
"assets/assets/images/interiors/archive_library.png": "2c3932d1813e17402fd098b7ff19ca36",
"assets/assets/images/interiors/tea_house.png": "379eda1e29fbd86f92264c2b3971d44a",
"assets/assets/images/interiors/archive_library.json": "45ede8d746d1e480e59da82732316ccd",
"assets/assets/images/interiors/noodle_shop.json": "0aea10e3cf574711b347794d0363a47b",
"assets/assets/images/interiors/ranger_cabin.png": "f0212d10112f565a526e5c9ca029fd71",
"assets/assets/images/interiors/README.md": "4d25424f58c6de5a092465333d9a5010",
"assets/assets/images/interiors/noodle_shop.png": "e14990316b0ad981ead50ec337c43994",
"assets/assets/images/sprites/fragment.png": "5b6f6cf84bbc2d16ab95f430b0ab0399",
"assets/assets/images/sprites/uec_swarm_hover.json": "05c2e0b8e04c5409ce47363f19568c80",
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
"assets/assets/images/sprites/uec_swarm_hover.png": "58667eec7901529bc8212e13bd4cc7a3",
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
"assets/assets/images/sprites/uec_swarm.png": "00bc8fc232f6b2643518d3ce26f676e8",
"assets/assets/images/sprites/asha_walk.png": "506a8ebeea436d049cb2b83ab90cf9f8",
"assets/assets/images/sprites/kaela_shoot.png": "105a1411a2ab2bc5dcaf0bb4ca36a18c",
"assets/assets/images/sprites/npc_ferro.png": "b584fc9ba9bf9478074b23d202a7e3f1",
"assets/assets/images/sprites/npc_asha.png": "80044055c567b03ac332a173b45fb5cc",
"assets/assets/images/sprites/uec_sniper.png": "a55b759eb27793f1f09a05ae15d2e757",
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
"assets/AssetManifest.bin": "cd17d0bd3358778512aba4904ee8ceb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "cf8b74915580cbb028abcd9e11290700",
"index.html": "682d711ea07992bef3d7ab8015d89322",
"/": "682d711ea07992bef3d7ab8015d89322",
"version.json": "c85cf4d645961f6198cb551a6f0c4288",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3d9849baea84eae01c239d604c225d11",
"main.dart.js": "4e97d301245bec4aa128db2b8ea12552",
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
