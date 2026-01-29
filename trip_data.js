const tripData = {
  title: "福岡 7 日遊",
  subtitle: "吃好睡好・輕鬆漫遊",
  meta: {
    startDate: "2026-02-19",
    endDate: "2026-02-25",
    hotel: {
      name: "Residence Hotel Hakata 15",
      address: "福岡県福岡市博多区博多駅南2丁目9",
      mapUrl: "https://maps.app.goo.gl/wEgcqj5SgseF8Ke1A"
    }
  },
  flights: [
    {
      type: "Arrival",
      flightNo: "BR120",
      airline: "EVA Air 長榮航空",
      date: "2/19 (四)",
      departure: { time: "15:30", city: "高雄 KHH" },
      arrival: { time: "18:55", city: "福岡 FUK" },
      note: "抵達後請直接前往搭乘計程車或地鐵"
    },
    {
      type: "Departure",
      flightNo: "BR119",
      airline: "EVA Air 長榮航空",
      date: "2/25 (三)",
      departure: { time: "20:00", city: "福岡 FUK" },
      arrival: { time: "22:00", city: "高雄 KHH" },
      note: "請於 18:00 前抵達機場辦理登機"
    }
  ],
  days: [
    {
      day: 1,
      date: "2/19 (四)",
      location: "抵達福岡",
      color: "blue",
      highlights: ["飯店 Check-in", "博多車站夜景"],
      transport: "機場接駁巴士 → 地鐵 (博多站)",
      schedule: [
        { time: "15:30", title: "高雄起飛", desc: "搭乘 BR120", icon: "plane-departure" },
        { time: "18:55", title: "抵達福岡機場", desc: "入境約 1 小時", icon: "plane-arrival" },
        { time: "20:00", title: "前往飯店", desc: "搭乘計程車或地鐵至博多站", icon: "taxi" },
        { time: "20:30", title: "飯店 Check-in", desc: "辦理入住手續", icon: "bed" },
        { time: "21:00", title: "博多車站晚餐", desc: "車站商場或拉麵街", icon: "utensils" }
      ]
    },
    {
      day: 2,
      date: "2/20 (五)",
      location: "別府一日遊",
      color: "teal",
      highlights: ["地獄巡禮", "地獄蒸料理"],
      transport: "JR 特急音速號 (Sonic)",
      schedule: [
        { time: "09:00", title: "搭乘特急", desc: "博多 → 別府", icon: "train" },
        { time: "11:00", title: "海地獄 & 灶地獄", desc: "參觀著名的溫泉地獄", icon: "camera" },
        { time: "13:00", title: "午餐：地獄蒸", desc: "體驗用溫泉蒸氣蒸煮食物", icon: "utensils" },
        { time: "15:00", title: "足湯體驗", desc: "海地獄或是 Cafe SHU", icon: "coffee" },
        { time: "17:00", title: "返回博多", desc: "搭乘 JR 返回", icon: "train" }
      ]
    },
    {
      day: 3,
      date: "2/21 (六)",
      location: "太宰府 & 由布院",
      color: "orange",
      highlights: ["輕鬆跟團", "金鱗湖"],
      transport: "KKday 巴士一日遊",
      schedule: [
        { time: "08:30", title: "集合出發", desc: "前往集合地點", icon: "bus" },
        { time: "10:00", title: "太宰府天滿宮", desc: "梅枝餅、星巴克", icon: "torii-gate" },
        { time: "13:00", title: "由布院散策", desc: "湯之坪街道、金鱗湖", icon: "walking" },
        { time: "17:00", title: "返程", desc: "返回博多車站", icon: "bus" }
      ]
    },
    {
      day: 4,
      date: "2/22 (日)",
      location: "福岡市區",
      color: "red",
      highlights: ["博多運河城", "福岡塔夜景"],
      transport: "地鐵 / 巴士",
      schedule: [
        { time: "10:00", title: "櫛田神社", desc: "博多總鎮守，看山笠", icon: "torii-gate" },
        { time: "11:30", title: "川端通商店街", desc: "傳統商店街漫步", icon: "shopping-bag" },
        { time: "14:00", title: "博多運河城", desc: "逛街、看噴水秀", icon: "building" },
        { time: "16:00", title: "天神地下街", desc: "歐風地下街", icon: "shopping-bag" },
        { time: "18:00", title: "福岡塔", desc: "搭巴士前往看夜景", icon: "star" }
      ]
    },
    {
      day: 5,
      date: "2/23 (一)",
      location: "門司港 & 小倉",
      color: "cyan",
      highlights: ["唐戶市場", "門司港懷舊"],
      transport: "JR 特急音速號",
      schedule: [
        { time: "09:00", title: "前往門司港", desc: "搭乘 JR 出發", icon: "train" },
        { time: "10:30", title: "唐戶市場", desc: "搭船過海去吃海鮮", icon: "fish" },
        { time: "13:00", title: "門司港懷舊區", desc: "車站拍照、香蕉人", icon: "camera" },
        { time: "15:00", title: "小倉城", desc: "搭車至小倉參觀", icon: "archway" },
        { time: "18:00", title: "返回博多", desc: "晚餐於博多解決", icon: "train" }
      ]
    },
    {
      day: 6,
      date: "2/24 (二)",
      location: "熊本一日遊",
      color: "indigo",
      highlights: ["熊本城", "熊本部長"],
      transport: "新幹線 (瑞穗/櫻花)",
      schedule: [
        { time: "09:00", title: "搭乘新幹線", desc: "博多 → 熊本 (30分)", icon: "train-subway" },
        { time: "10:00", title: "熊本城", desc: "參觀天守閣", icon: "archway" },
        { time: "12:00", title: "城彩苑", desc: "櫻之馬場吃小吃", icon: "utensils" },
        { time: "14:00", title: "Kumamon Square", desc: "部長辦公室 (需查時間)", icon: "smile" },
        { time: "16:00", title: "上下通商店街", desc: "逛街採買", icon: "shopping-bag" }
      ]
    },
    {
      day: 7,
      date: "2/25 (三)",
      location: "返程",
      color: "gray",
      highlights: ["最後採買", "前往機場"],
      transport: "地鐵 / 計程車",
      schedule: [
        { time: "11:00", title: "退房", desc: "寄放行李", icon: "suitcase" },
        { time: "12:00", title: "天神/博多最後採買", desc: "補齊伴手禮", icon: "shopping-cart" },
        { time: "17:30", title: "前往機場", desc: "領行李出發", icon: "taxi" },
        { time: "18:00", title: "機場報到", desc: "BR119 (20:00 起飛)", icon: "passport" },
        { time: "22:00", title: "抵達高雄", desc: "甜蜜的家", icon: "home" }
      ]
    }
  ]
};
