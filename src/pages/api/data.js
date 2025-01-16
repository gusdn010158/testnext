export default function handler(req, res) {
  const { type } = req.query; // 클라이언트에서 전달된 type 파라미터

  // 하드코딩된 JSON 데이터
  const jsonData = {
    MainItem: [
      {
        id: 1,
        name: "월간가구세일",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/171047997632767967.png?w=144",
      },
      {
        id: 2,
        name: "오늘의달",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=144",
      },
      {
        id: 3,
        name: "수납꿀팁",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/169880736853477508.png?w=144",
      },
      {
        id: 4,
        name: "행운출첵",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/170184318298899959.png?w=144",
      },
      {
        id: 5,
        name: "집들이",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=144",
      },
      {
        id: 6,
        name: "챌린지참여",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/170736215082472666.png?w=144",
      },
      {
        id: 7,
        name: "장보기",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/170358029767805279.png?w=144",
      },
      {
        id: 8,
        name: "빠른배송",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=144",
      },
      {
        id: 9,
        name: "리모델링",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=144",
      },
      {
        id: 10,
        name: "쉬운이사",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=144",
      },
    ],
    ctitem: [
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169396345621785215.jpeg?w=256&h=342&c=c",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/1559140177706_rc2r.jpg?w=256&h=256&c=c",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots1558884619_ImtRCyiZ.jpeg?w=256&h=256&c=c",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166901982809189373.jpeg?w=256&h=256&c=c",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166700980073758874.jpeg?w=256&h=256&c=c",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164933651677042251.jpeg?w=256&h=256&c=c",
      },
    ],
    storeitem: [
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171048683315201597.png?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171074212498282781.png?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171048723979218063.png?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171048733582190540.png?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171048488772568431.png?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171089715562887826.jpg?w=1920",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/171100688655755528.png?w=1920",
      },
    ],
    store: [
      {
        id: 1,
        name: "헬로우 슬립",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169821856938204382.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[10%쿠폰] NEW컬러 부드러운 카스테라 워싱 항균 옥수수솜간절기/사계절 차렵이불세트",
        price: "35900",
      },
      {
        id: 2,
        name: "수면밀도",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169657816330556788.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[오늘의딜] 허리 디스크 환자가 만든 코어 릴랙스 매트리스 S,SS,Q,K",
        price: "299,000",
      },
      {
        id: 3,
        name: "한샘",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165959279812235613.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "한샘몰pick 눕 데일리 구스 아쿠아텍스 패브릭 모듈 소파 4인용3colors",
        price: "724,900",
      },
      {
        id: 4,
        name: "웰퍼니쳐",
        img: "https://prs.ohou.se/apne2/any/uploads/productions/v1-189531249586240.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[쿠폰+무료내림]허리엔 더매직 허리특화 포켓스프링 매트리스 S/SS/Q/K/SK",
        price: "229,000",
      },
      {
        id: 5,
        name: "CJ제일제당",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168872150240958659.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "햇반 백미 210g*36개",
        price: "33,900",
      },
      {
        id: 6,
        name: "아엠홈",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[5%쿠폰][맞춤]비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)",
        price: "16,800",
      },
      {
        id: 7,
        name: "HP",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168126516576963586.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "HP 15-fd0096TU 13세대i5/윈11/가성비 가벼운 사무용 대학생 인강용 노트북",
        price: "860,520",
      },
      {
        id: 8,
        name: "LG전자",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=640&h=640&c=c&webp=1",
        text: "트롬 오브제컬렉션 워시타워 W20WANQ",
        price: "2,499,000",
      },

      {
        id: 9,
        name: "삼성전자",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164497864137030916.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "혜택가 45만원대 비스포크 제트 무선청소기220W VS20B956AXE",
        price: "580,000",
      },
      {
        id: 10,
        name: "휴도",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165580847056056090.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[쿠폰가103,550]편안한 제주 25cm 필로우탑 본넬스프링 침대 매트리스S/SS/Q/K",
        price: "109,000",
      },
      {
        id: 11,
        name: "LG전자",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168429989971225448.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "LG 디오스 식기세척기 오브제컬렉션 DUBJ2EAL",
        price: "1,078,000",
        title: "LG 디오스 식기세척기 오브제컬렉션 DUBJ2EAL",
        txt: "LG전자",
      },
      {
        id: 12,
        name: "한샘",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165882516717645937.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "한샘몰pick티렌토 리세 아쿠아텍스 3인용 패브릭 소파 3colors",
        price: "282,900",
        title: "한샘몰pick티렌토 리세 아쿠아텍스 3인용 패브릭 소파 3colors",
        txt: "한샘",
      },
      {
        id: 13,
        name: "오가든",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169337295993617299.png?gif=1&w=640&h=640&c=c&webp=1",
        text: "몬스테라 오늘의가든 사은품용 비매품",
        price: "100,000",
        title: "몬스테라 오늘의가든 사은품용 비매품",
        txt: "오가든",
      },
      {
        id: 14,
        name: "삼성전자",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168913983339106666.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "삼성전자 UHD 4K 스마트TV KU65UB8070FXKR 163cm(65)1등급",
        price: "957,000",
      },
      {
        id: 15,
        name: "오가든",
        img: "https://prs.ohou.se/apne2/any/uploads/productions/v1-199944570368128.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "머그컵 오늘의가든 사은품용 비매품",
        price: "100,000",
      },
      {
        id: 16,
        name: "삼성전자",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168169741898739671.jpg?gif=1&w=640&h=640&c=c&webp=1",
        text: "[주말특가] 삼성 인버터 벽걸이에어컨 AR06A1171HZS 기본설치비포함",
        price: "542,790",
      },

      {
        id: 19,
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169850743925222899.jpg?w=360&h=240&c=c",
        title:
          "다르긴 다르네요😮24년 된 구축에 인테리어 디자이너의 재능을 쏟다",
      },
      {
        id: 20,
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170740069017173364.JPG?w=360&h=240&c=c",
        title: "온라인 집들이 5년 후, 얼마나 바뀌었을까?",
      },
      {
        id: 21,

        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/168575585272673089.jpg?w=360&h=240&c=c",
        title: "누수? 이참에 바꾸자! 원목의 고급스러움이 묻어나는 집으로",
      },
      {
        id: 22,

        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/168610348946587219.jpg?w=360&h=240&c=c",
        title: "버려지는 공간 하나 없이, 작은 미술관 같은 단독주택",
      },

      {
        id: 23,
        txt: "예나디자인",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/170588082462464511.jpg?w=1280&q=80&webp=1",
        title:
          "예나디자인결혼하고 첫집에서 다음집으로 이사를 계획하면서 매매를 하게되었고 평소 SNS에서만 보던 내가 구상한 나의오늘의집에 인테리어 금액자체가  ",
      },
      {
        id: 24,
        txt: "홈 루덴스",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/170847788288990712.jpg?w=1280&q=80&webp=1",
        title:
          "홈 루덴스처음 상담부터 꼼꼼하고 친절하셨어요, 제가 2베이 아파트에서 냉장고에 김치냉장고까지 있는 상황에서 넓은 테리어 팀장",
      },
      {
        id: 25,
        txt: "가우디 디자인",
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/170688711793777188.JPG?w=360&q=80&webp=1",
        title:
          "가우디 디자인인터넷에서 보고 계약 한 업체가 처음 계약과 다르게 자꾸 이런 저런 핑계로 금액을 많이 올려서 계약을 중도 해지하고, 오늘의 집을 통이 정",
      },
      {
        id: 26,
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/171076243016578937.png?w=1920&h=609&c=c",
        title: "액자에 담은 듯한 사계절 뷰! 확장 공사 덕분에 가능👌",
      },
      {
        id: 27,
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/171133087672514948.jpg?w=1920&h=609&c=c",
        title: "곳곳에🐱 고양이들을 위한 공간으로 꾸민, 화이트 하우스",
      },
      {
        id: 28,

        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170617059895805584.jpg?w=1920&h=609&c=c",
        title: "호텔이 따로 없네! 모던한 감성으로 꽉 채운 50평대",
      },
      {
        id: 29,

        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/171254511829995630.jpg?w=1920&h=609&c=c",
        title: "양창 구조의 장점을 살리고, 이국적인 느낌을 더한 구축",
      },
    ],
    test: [
      {
        id: 1,
        company: "헬로우슬립",
        title:
          "[단하루!15%쿠폰] 부드러운 카스테라 워싱 항균 옥수수솜 간절기/사계절 차렵이불세트",
        price: "35,900",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169821856938204382.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165483857498060691.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/170356346803667680.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/170323140080794847.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169821858307654836.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },

      {
        id: 2,
        company: "수면밀도",
        title:
          "[오늘의딜] 허리 디스크 환자가 만든 코어 릴랙스 매트리스 S,SS,Q,K",
        price: "299,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169657816330556788.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169657818393137084.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169657818691676475.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169657819086286193.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169657819646091057.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 3,
        company: "한샘",
        title:
          "한샘몰pick 눕 데일리 구스 아쿠아텍스 패브릭 모듈 소파 4인용3colors",
        price: "724,900",
        images: [
          {
            index: 1,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/v1-232351687671808.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/4167132/1659431190006.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/4167132/1659431190208.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/4167132/1659431190462.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/4167132/1659431190974.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 4,
        company: "웰퍼니쳐",
        title:
          "[쿠폰+무료내림]허리엔 더매직 허리특화 포켓스프링 매트리스 S/SS/Q/K/SK",
        price: "229,000",
        images: [
          {
            index: 1,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/v1-189531249586240.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-189500920807488.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-189499532263552.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-189499555536896.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-189500834439168.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 5,
        company: "CJ제일제당",
        title: "햇반 백미 210g*36개",
        price: "33,900",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168872150240958659.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 6,
        company: "아엠홈",
        title:
          "[5%쿠폰][맞춤]비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)",
        price: "16,800",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/159539854701867886.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/159539855586970975.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/159539855924688755.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/166311265330244818.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 7,
        company: "HP",
        title:
          "HP 15-fd0096TU 13세대i5/윈11/가성비 가벼운 사무용 대학생 인강용 노트북",
        price: "860,520",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168126516576963586.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168067623715698074.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168067624259414550.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168067624577046326.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168067703927072833.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 8,
        company: "LG전자",
        title: "트롬 오브제컬렉션 워시타워 W20WANQ",
        price: "2,499,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 9,
        company: "삼성전자",
        title: "혜택가 45만원대 비스포크 제트 무선청소기220W VS20B956AXE",
        price: "580,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164497864137030916.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/170245348702624250.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/164497864547135855.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/164497864747289666.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/164497864942113681.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 10,
        company: "휴도",
        title:
          "[쿠폰가103,550]편안한 제주 25cm 필로우탑 본넬스프링 침대 매트리스S/SS/Q/K",
        price: "109,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165580847056056090.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165580847955099808.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165580848677708975.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168022791379133213.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168022791710268882.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 11,
        company: "LG전자",
        title: "LG 디오스 식기세척기 오브제컬렉션 DUBJ2EAL",
        price: "1,078,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168429989971225448.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165354041682194165.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165354041981557058.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165354042274613624.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165354042513663921.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 12,
        company: "한샘",
        title: "한샘몰pick티렌토 리세 아쿠아텍스 3인용 패브릭 소파 3colors",
        price: "282,900",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165882516717645937.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165751695848979130.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165751689418323174.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/162278403373364988.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/160568154650388051.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 13,
        company: "오가든",
        title: "몬스테라 오늘의가든 사은품용 비매품",
        price: "100,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169337295993617299.png?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169397579683724710.png?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/169397580669516057.png?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 14,
        company: "삼성전자",
        title: "삼성전자 UHD 4K 스마트TV KU65UB8070FXKR 163cm(65)1등급",
        price: "957,000",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168913983339106666.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168809356641092705.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168809356970799210.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168809357298947154.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 5,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/168809357655282572.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 15,
        company: "오가든",
        title: "머그컵 오늘의가든 사은품용 비매품",
        price: "100,000",
        images: [
          {
            index: 1,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/v1-199944570368128.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-199944625643584.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 3,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-199944637976576.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 4,
            img: "https://prs.ohou.se/apne2/any/uploads/productions/images/v1-199944649805952.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
      {
        id: 16,
        company: "삼성전자",
        title:
          "[주말특가] 삼성 인버터 벽걸이에어컨 AR06A1171HZS 기본설치비포함",
        price: "542,790",
        images: [
          {
            index: 1,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168169741898739671.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
          {
            index: 2,
            img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/9414397/1677137822656.jpg?gif=1&w=640&h=640&c=c&webp=1",
          },
        ],
      },
    ],
    MainSide: [
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/171047806781131161.png?w=360",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/171169973270255325.png?w=360",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/171169989635207757.png?w=360",
      },
      {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/171169995555675511.png?w=360",
      },
    ],
    Header: [
      {
        id: 1,
        title: "커뮤니티",
        href: "",
        one: "홈",
        two: "추천",
        three: "#채널",
        four: "집들이",
        five: "집사진",
        six: "3D인테리어",
        seven: "살림수납",
        eight: "콜레터블",
        nine: "홈스토랑",
        ten: "핫플레이스",
        tenone: "육아",
      },
      {
        id: 2,
        title: "쇼핑",
        href: "Store",
        one: "쇼핑홈",
        two: "카테고리",
        three: "베스트",
        four: "오늘의 딜",
        five: "리퍼마켓",
        six: "오!굿즈",
        seven: "빠른배송",
        eight: "오!쇼룸",
        nine: "프리미엄",
        ten: "기획전",
        tenone: "",
      },
      {
        id: 3,
        title: "인테리어/생활",
        href: "Expert",
        one: "홈",
        two: "주거공간시공",
        three: "상업공간시공",
        four: "시공자재랭킹",
        five: "제품설치",
        six: "이사",
        seven: "집보기 체크리스트",
        eight: "아파트시공사례",
        nine: "",
        ten: "",
        tenone: "",
      },
    ],
    Customer: [
      {
        id: 1,
        category: "로그인/회원정보",
        text: "카카오계정으로 로그인하면 이미 카카오로 가입하신 이메일입니다라고 나오는데 어떻게 해야하나요?",
        open: "휴대전화 번호를 변경하셨거나 카카오톡 계정을 탈퇴하고 새로 가입하신 경우 이런 문제가 발생할 수 있습니다.이 경우 새로운 정보가 반영될 수 있도록 번거로우시더라도 고객센터로 문의 부탁드립니다.",
      },
      {
        id: 2,
        category: "로그인/회원정보",
        text: "오늘의 집에 가입한 적 없는데 이미 가입된 이메일이라고 나와요 어떻게 하나요?",
        open: "현재 오늘의집은 회원 가입 시 이메일 인증 절차를 거치므로 이러한 문제가 발생되지 않지만 인증 절차 도입 전 다른 고객님께서 이메일을 잘못 입력하신 경우 '이미 가입한 이메일'이란 메시지가 노출될 수 있습니다.",
      },
      {
        id: 3,
        category: "증빙서류발급",
        text: "세금계산서를 받고 싶은데 어떻게 해야하나요?",
        open: "세금계산서 발급은 어려우며, 결제 시 지출증빙 또는 현금영수증 발행은 가능합니다.",
      },
      {
        id: 4,
        category: "증빙서류발급",
        text: "주문후 지출증빙/현금영수증 발행이 가능한가요?",
        open: "주문 완료 후 지출증빙/현금영수증 발행은 불가능합니다.",
      },
      {
        id: 5,
        category: "증빙서류발급",
        text: "현금영수증 발급을 다른사람으로 하고 싶습니다.",
        open: "타인의 명의로 현금영수증 발급을 원하실경우 상품 주문 시 발급 받으실 고객님의 정보(주민등록번호/현금영수증 카드번호/휴대폰번호)를 입력해주시면 됩니다.",
      },
      {
        id: 6,
        category: "반품/교환",
        text: "제품이 불량입니다 반품 혹은 교환은 어떻게 하나요?",
        open: "결제 후 결제 정보 변경은 불가능 합니다.단, 결제 완료 단계에서는 취소 후 재주문을 통해 변경 가능합니다.",
      },
      {
        id: 7,
        category: "반품/교환",
        text: "주문후 결제 방법을 변경하고 싶은데 어떻게 해야하나요?",
        open: "한번 발급 받은 계좌번호는 변경이 불가능합니다.재주문을 통해 새로운 계좌를 발급 받으신 후 입금 부탁드립니다.",
      },

      {
        id: 8,
        category: "취소/환불",
        text: "주문취소는 어떻게 하나요?",
        open: "판매처에서 주문을 확인하기 전이라면 언제든 취소하실 수 있으며, [나의 쇼핑 > 주문배송내역 조회 > 주문상세보기]에서 직접 주문취소하실 수 있습니다.",
      },
      {
        id: 9,
        category: "취소/환불",
        text: "취소 후 환불은 언제 되나요?",
        open: "신용카드 및 체크카드의 경우 카드사에서 확인 절차를 거치는 관계로 평균 3~7일 영업일 이내 환불처리가 완료됩니다.무통장 입금의 경우 평균 5영업일 이내 요청 하신 계좌로 환불됩니다.휴대폰 소액결제의 경우 평균 3영업일 이내 환불 또는 취소 처리가 완료됩니다.",
      },
      {
        id: 10,
        category: "취소/환불",
        text: "여러개의 삼품을 주문했는데 일부만 취소할수도있나요?",
        open: "신용카드 및 체크카드 또는 무통장 입금의 경우 배송 상태에 따라 결제후 부분 취소가 가능하며,배송상태에 따른 취소 가능 여부는 아래와 같습니다.",
      },

      {
        id: 16,
        category: "주문/결제",
        text: "주문내역은 어떻게 확인할수있나요?",
        open: "우측 상단 프로필 사진을 클릭 후 [나의쇼핑]을 통해 확인 가능합니다",
      },
      {
        id: 17,
        category: "주문/결제",
        text: "결제방법은 어떤것이 있나요?",
        open: "신용카드 및 체크카드, 무통장 입금, 휴대폰 소액결제, 네이버페이를 이용해 결제 가능합니다.",
      },
      {
        id: 18,
        category: "주문/결제",
        text: "비회원주문 및 전화주문이 가능한가요?",
        open: "전화주문은 준비중에 있습니다.비회원 주문은 가능하지만 일부 상품에 한해 제한되어있습니다.",
      },
      {
        id: 19,
        category: "주문/결제",
        text: "신용카드 무이자 할부가 되나요?",
        open: "각 카드사 별로 상이하며, 카드사를 통해 확인 가능합니다.",
      },

      {
        id: 20,
        category: "배송관련",
        text: "배송비는 얼마인가요?",
        open: "오늘의집은 상품정보 중계 및 판매 매체이며, 판매 업체 별로 배송비 정책이 상이합니다각 상품상세페이지에서 배송비를 확인하실 수 있습니다.",
      },
      {
        id: 21,
        category: "배송관련",
        text: "배송확인은 어떻게 하나요?",
        open: "우측 상단 프로필의 [나의쇼핑]을 통해 배송단계를 한눈에 보실 수 있습니다.또한 배송이 시작되면 카카오톡 알림톡 또는 SMS로 안내메시지가 발송됩니다.",
      },
      {
        id: 22,
        category: "배송관련",
        text: "배송은 얼마나 걸리나요?",
        open: "상품 배송 기간은 배송 유형에 따라 출고 일자 차이가 있습니다.자세한 사항은 구매하신 상품의 상세 페이지에서 확인 가능",
      },
      {
        id: 23,
        category: "배송관련",
        text: "여러상품을 묶음 배송 받으려면 어떻게 해야하나요?",
        open: "각 상품별로 배송처가 상이할 수 있기 때문에 묶음 배송은 어렵습니다.단, 배송처가 같은 경우 배송처의 정책에 따라 가능 할 수 있습니다.",
      },

      {
        id: 24,
        category: "서비스/기타",
        text: "좋아요를 누른 콘텐츠(사진/집들이/노하우/등)들은 어디서 볼수있나요?",
        open: "우측 상단 프로필 사진을 클릭 후 [마이홈 > 좋아요] 페이지에서 확인 가능합니다.",
      },
      {
        id: 25,
        category: "서비스/기타",
        text: "제품의 자세한 정보는 어떻게 알수있나요?",
        open: "각 제품의 상세 페이지에서 확인 가능하며, 더욱 자세한 정보는 제품상세페이지 내 문의하기를 통해 판매 업체에 문의 가능합니다.",
      },
      {
        id: 26,
        category: "서비스/기타",
        text: "좋지 않은 댓글을 받았습니다 어떻게 해야하나요?",
        open: "댓글 아래에 신고 버튼을 눌러 댓글 신고가 가능합니다.",
      },
      {
        id: 27,
        category: "서비스/기타",
        text: "인기게시글,인기유저의 기준은 무엇인가요?",
        open: "오늘의집 추천 알고리즘에 따라 인기게시글과 유저가 뽑히게 됩니다.많은 분들에게 공감되는 인테리어 사진을 통해 인기 유저가 되어보세요.",
      },
      {
        id: 28,
        category: "서비스/기타",
        text: "오늘의 집에서 다루는 콘텐츠는 어떤 것이 있나요",
        open: "오늘의집은 모든 사람들이 더 나은 공간에서 더 나은 삶을 만들어갈 수 있도록, 인테리어와 라이프 스타일에 관한 콘텐츠를 공유하고 있습니다. 여러분의 집과 일상에 관한 사진과 영상, 게시글을 자유롭게 올려주세요. 사진은 업로드 후 즉시, 노하우 콘텐츠는 업로드 후 14일 이내 오늘의집 앱에 게시됩니다. 단, 온라인 집들이 콘텐츠는 오늘의집 발행 기준에 따라 콘텐츠를 선정하여 오늘의집 앱에 게시합니다.",
      },
    ],
    Custom: [
      {
        name: "전체",
      },
      {
        name: "주문/결제",
      },
      {
        name: "배송관련",
      },
      {
        name: "취소/환불",
      },
      {
        name: "반품/교환",
      },
      {
        name: "증빙서류발급",
      },
      {
        name: "로그인/회원정보",
      },
      {
        name: "서비스/기타",
      },
    ],
  };

  // 요청된 type에 따라 데이터를 반환
  switch (type) {
    case "MainSide":
      return res.status(200).json(jsonData.MainSide || []);
    case "store":
      return res.status(200).json(jsonData.store || []);
    case "storeitem":
      return res.status(200).json(jsonData.storeitem || []);
    case "ctitem":
      return res.status(200).json(jsonData.ctitem || []);
    case "MainItem":
      return res.status(200).json(jsonData.MainItem || []);
    case "test":
      return res.status(200).json(jsonData.test || []);
    case "Header":
      return res.status(200).json(jsonData.Header || []);
    case "Customer":
      return res.status(200).json(jsonData.Customer || []);
    case "Custom":
      return res.status(200).json(jsonData.Custom || []);
    default:
      return res.status(400).json({ error: "Invalid type parameter" });
  }
}
