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
      location: "抵達福岡 & 博多車站",
      color: "blue",
      highlights: ["博多車站夜景", "鐵道神社"],
      transport: "機場接駁巴士 → 地鐵 (博多站)",
      schedule: [
        { time: "15:30", title: "高雄起飛", desc: "搭乘 BR120", icon: "plane-departure" },
        { time: "18:55", title: "抵達福岡機場", desc: "前往A2出口搭接駁車至地鐵站", icon: "plane-arrival" },
        { time: "20:00", title: "前往飯店", desc: "搭地鐵兩站至博多站，Check-in", icon: "hotel" },
        { time: "21:00", title: "博多車站 (Hakata City)", desc: "頂樓「鐵道神社」看夜景、晚餐", icon: "city" }
      ]
    },
    {
      day: 2,
      date: "2/20 (五)",
      location: "福岡市區精華",
      color: "red",
      highlights: ["櫛田神社", "福岡塔夜景", "大濠公園"],
      transport: "地鐵 / 巴士 (西鐵巴士W1/302)",
      schedule: [
        { time: "09:00", title: "大濠公園 & 福岡城", desc: "舞鶴公園散步 (地鐵大濠公園站)", icon: "tree" },
        { time: "11:00", title: "櫛田神社", desc: "博多總鎮守，看巨大山笠 (地鐵祗園站)", icon: "torii-gate" },
        { time: "12:00", title: "川端通商店街", desc: "步行3分，順便買明太子法棍", icon: "shopping-bag" },
        { time: "14:00", title: "博多運河城", desc: "購物、看建築設計", icon: "building" },
        { time: "17:30", title: "前往福岡塔", desc: "天神巴士總站前(1A)搭W1或302巴士", icon: "bus" },
        { time: "18:30", title: "福岡塔夜景", desc: "欣賞360度夜景 (門票1000日圓)", icon: "star" }
      ]
    },
    {
      day: 3,
      date: "2/21 (六)",
      location: "太宰府 & 由布院 (KKday)",
      color: "orange",
      highlights: ["太宰府天滿宮", "由布院金鱗湖"],
      transport: "KKday 巴士一日遊",
      schedule: [
        { time: "08:15", title: "集合出發", desc: "地點：羅森 福岡東方飯店", icon: "users" },
        { time: "10:00", title: "太宰府天滿宮", desc: "梅枝餅、星巴克", icon: "torii-gate" },
        { time: "13:00", title: "由布院散策", desc: "湯之坪街道、金鱗湖", icon: "walking" },
        { time: "19:30", title: "返回博多", desc: "行程結束", icon: "bus" }
      ]
    },
    {
      day: 4,
      date: "2/22 (日)",
      location: "別府地獄巡禮",
      color: "teal",
      highlights: ["海地獄", "地獄蒸料理", "灶地獄"],
      transport: "JR 音速號 + 龜之井巴士",
      schedule: [
        { time: "09:00", title: "前往別府", desc: "搭乘 JR Sonic 音速號", icon: "train" },
        { time: "10:30", title: "別府地獄巡禮", desc: "海地獄、灶地獄 (搭巴士5/7/41號)", icon: "cloud-meatball" },
        { time: "13:00", title: "午餐：地獄蒸工房", desc: "體驗用溫泉蒸氣蒸食物 (鐵輪站)", icon: "utensils" },
        { time: "15:00", title: "別府足湯", desc: "海地獄 或 Cafe SHU", icon: "coffee" },
        { time: "17:30", title: "返回博多", desc: "或至天神晚餐", icon: "train" }
      ]
    },
    {
      day: 5,
      date: "2/23 (一)",
      location: "門司港 & 小倉",
      color: "cyan",
      highlights: ["唐戶市場", "門司港懷舊", "小倉城"],
      transport: "JR 音速號 + 渡船 + 電車",
      schedule: [
        { time: "09:00", title: "Dacomecc", desc: "飯店步行12分買麵包/早餐", icon: "bread-slice" },
        { time: "10:30", title: "門司港車站", desc: "大正時期復古車站拍照", icon: "camera" },
        { time: "11:30", title: "唐戶市場", desc: "搭船過海去吃海鮮握壽司", icon: "fish" },
        { time: "13:30", title: "門司港懷舊區", desc: "藍翼橋、香蕉人、鐵道紀念館", icon: "anchor" },
        { time: "15:30", title: "小倉城 & 庭園", desc: "搭電車至小倉 (約15分)", icon: "archway" },
        { time: "17:30", title: "旦過市場", desc: "北九州的廚房，昭和氣氛", icon: "store" },
        { time: "19:00", title: "返回博多", desc: "晚餐", icon: "train" }
      ]
    },
    {
      day: 6,
      date: "2/24 (二)",
      location: "阿蘇 & 熊本",
      color: "indigo",
      highlights: ["阿蘇火山", "熊本城", "熊本部長"],
      transport: "新幹線 + 豐肥本線/巴士",
      schedule: [
        { time: "08:30", title: "前往熊本/阿蘇", desc: "搭乘新幹線轉車至阿蘇", icon: "mountain" },
        { time: "10:30", title: "阿蘇火山", desc: "欣賞壯觀火山口", icon: "volcano" },
        { time: "13:30", title: "熊本城", desc: "壯觀天守閣與石牆", icon: "archway" },
        { time: "15:00", title: "城彩苑 & 商店街", desc: "櫻之馬場吃小吃、上下通逛街", icon: "shopping-bag" },
        { time: "16:30", title: "水前寺成趣園", desc: "日式迴遊庭園", icon: "tree" },
        { time: "17:30", title: "Kumamon Square", desc: "部長辦公室 (鶴屋百貨)", icon: "smile" },
        { time: "19:00", title: "晚餐：勝烈亭/壽司", desc: "鹿兒島六白黑豬排 或 Mekkemon Sushi", icon: "utensils" }
      ]
    },
    {
      day: 7,
      date: "2/25 (三)",
      location: "最後採買 & 返程",
      color: "gray",
      highlights: ["天神購物", "機場免稅店"],
      transport: "地鐵 / 計程車",
      schedule: [
        { time: "11:00", title: "退房 & 寄放行李", desc: "收拾好心情", icon: "suitcase" },
        { time: "12:00", title: "天神商圈補貨", desc: "Parco、大丸、岩田屋", icon: "shopping-cart" },
        { time: "16:00", title: "前往機場", desc: "取回行李出發", icon: "taxi" },
        { time: "18:00", title: "機場報到", desc: "BR119 (20:00 起飛)", icon: "passport" },
        { time: "22:00", title: "抵達高雄", desc: "甜蜜的家", icon: "home" }
      ]
    }
  ]
};
