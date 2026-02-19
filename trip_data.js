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
        { time: "21:00", title: "博多車站夜景", desc: "頂樓「鐵道神社」", icon: "city" },
        { time: "21:30", title: "晚餐：博多もつ鍋 前田屋 総本店", desc: "牛腸鍋 (飯店步行12分) <a href='https://www.google.com/maps/search/博多もつ鍋+前田屋+総本店' target='_blank'>地圖</a>", icon: "fire" }
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
        { time: "09:00", title: "早餐：The Full Full Hakata", desc: "明太子法棍 (川端通商店街走路6分)<br>營業時間: 10:00-19:00 <a href='https://maps.app.goo.gl/68EANsmf46c5FdZe9' target='_blank'>地圖</a>", icon: "bread-slice" },
        { time: "10:00", title: "大濠公園 & 福岡城", desc: "舞鶴公園散步 (地鐵大濠公園站)", icon: "tree" },
        { time: "11:00", title: "櫛田神社", desc: "博多總鎮守，看巨大山笠 (地鐵祗園站)", icon: "torii-gate" },
        { time: "12:30", title: "午餐：いくら博多店", desc: "狗掌漢堡排蛋包飯 (櫛田神社旁)<br>營業時間: 11:00–14:30、17:00–20:30 <a href='https://www.google.com/maps/search/いくら博多店' target='_blank'>地圖</a>", icon: "utensils" },
        { time: "14:00", title: "博多運河城", desc: "購物、看建築設計", icon: "building" },
        { time: "17:30", title: "前往福岡塔", desc: "天神巴士總站前(1A)搭W1或302巴士", icon: "bus" },
        { time: "18:30", title: "福岡塔夜景", desc: "欣賞360度夜景 (門票1000日圓)", icon: "star" },
        { time: "20:00", title: "晚餐：大東園 本店", desc: "燒肉 (運河城步行4分)<br>營業時間: 11:30–22:30 <a href='https://maps.app.goo.gl/RZXK4Qe2c1vdMKow8' target='_blank'>地圖</a>", icon: "fire" }
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
        { time: "19:30", title: "返回博多", desc: "行程結束", icon: "bus" },
        { time: "20:00", title: "晚餐：鰻魚四代目菊川", desc: "中洲春吉店 鰻魚飯 (博多站步行19分)<br>一般¥4780 / 明太子¥5700 <a href='https://maps.app.goo.gl/EDtrNXcRQFsR6r8DA' target='_blank'>地圖</a>", icon: "fish" }
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
        { time: "13:00", title: "午餐：地獄蒸工房 鐵輪", desc: "體驗用溫泉蒸氣蒸食物 <a href='https://maps.app.goo.gl/y9PTJV81xoTf6r678' target='_blank'>地圖</a>", icon: "utensils" },
        { time: "15:00", title: "別府足湯", desc: "海地獄 或 Cafe SHU", icon: "coffee" },
        { time: "17:30", title: "返回博多", desc: "或至天神晚餐", icon: "train" },
        { time: "19:30", title: "晚餐：天麩羅処ひらお", desc: "大名店 (近天神) + 體驗中洲屋台 <a href='https://maps.app.goo.gl/akcbUcugTn6tXYPQ7' target='_blank'>地圖</a>", icon: "utensils" }
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
        { time: "09:00", title: "早餐：Dacomecc", desc: "人氣明太子法棍 (飯店步行12分)<br>營業時間: 07:00-19:00 <a href='https://maps.app.goo.gl/aoJ9eCC66Mdh2gxk9' target='_blank'>地圖</a>", icon: "bread-slice" },
        { time: "10:30", title: "門司港車站", desc: "大正時期復古車站拍照", icon: "camera" },
        { time: "11:30", title: "唐戶市場", desc: "搭船過海去吃海鮮握壽司", icon: "fish" },
        { time: "13:30", title: "午餐：伽哩本舖 / Princess Phi Phi", desc: "燒咖哩 (營業至 20:00/20:30) <a href='https://maps.app.goo.gl/ThndpJoafQpcj5nM6' target='_blank'>地圖</a>", icon: "utensils" },
        { time: "15:30", title: "小倉城 & 庭園", desc: "搭電車至小倉 (約15分)", icon: "archway" },
        { time: "17:30", title: "旦過市場", desc: "北九州的廚房，昭和氣氛", icon: "store" },
        { time: "19:00", title: "晚餐：博多一幸舍 博多本店", desc: "泡沫系豚骨拉麵 (博多站步行21分)<br>營業時間: 11:00–23:30 <a href='https://www.google.com/maps/search/博多一幸舎+博多本店' target='_blank'>地圖</a>", icon: "bowl-food" }
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
        { time: "13:00", title: "午餐：勝烈亭豬排 (南熊本店)", desc: "鹿兒島六白黑豬 (米其林推薦)<br>營業時間: 11:00-21:30 <a href='https://maps.app.goo.gl/suDe3ruvfP6XFbUE6' target='_blank'>地圖</a>", icon: "utensils" },
        { time: "14:30", title: "熊本城 & 城彩苑", desc: "壯觀天守閣與石牆", icon: "archway" },
        { time: "16:30", title: "水前寺成趣園", desc: "日式迴遊庭園", icon: "tree" },
        { time: "17:30", title: "Kumamon Square", desc: "部長辦公室 (鶴屋百貨)", icon: "smile" },
        { time: "19:00", title: "晚餐：Mekkemon Sushi", desc: "熊本站前迴轉壽司<br>營業時間: 11:00-14:30、17:00-21:00 <a href='https://maps.app.goo.gl/rDpgJNCfe2BnvamLA' target='_blank'>地圖</a>", icon: "fish" }
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
        { time: "09:00", title: "早餐", desc: "飯店享用 / 附近咖啡店", icon: "coffee" },
        { time: "11:00", title: "退房 & 寄放行李", desc: "收拾好心情", icon: "suitcase" },
        { time: "12:00", title: "午餐：博多一幸舍 (拉麵滑走路店)", desc: "機場前最後一碗拉麵 <a href='https://www.google.com/maps/search/福岡空港+博多一幸舎' target='_blank'>地圖</a>", icon: "bowl-food" },
        { time: "13:30", title: "天神商圈補貨", desc: "Parco、大丸、岩田屋", icon: "shopping-cart" },
        { time: "16:00", title: "前往機場", desc: "取回行李出發", icon: "taxi" },
        { time: "18:00", title: "機場報到", desc: "BR119 (20:00 起飛)", icon: "passport" },
        { time: "22:00", title: "抵達高雄", desc: "甜蜜的家", icon: "home" }
      ]
    }
  ],
  recommendations: [
    // --- 原有推薦 (天神/中洲/藥院) ---
    { category: "拉麵", title: "博多拉麵 ShinShin (天神本店)", desc: "福岡藝人最愛！濃厚豚骨湯頭，麵條極細。", googleMap: "https://maps.app.goo.gl/PjekN9CJ4mqoiR7T6", icon: "bowl-food" },
    { category: "拉麵", title: "一蘭拉麵 總本店", desc: "朝聖必去！整棟的拉麵總部，昭和復古風。", googleMap: "https://maps.app.goo.gl/YwBpoTQyRcfxwjiN7", icon: "utensils" },
    { category: "甜點", title: "鈴懸 (Suzukake) 本店", desc: "90年老字號和菓子，草莓大福是極品。", googleMap: "https://maps.app.goo.gl/yrqvgfNWHamuBosX6", icon: "cookie-bite" },
    { category: "屋台", title: "中洲屋台街", desc: "體驗福岡夜生活，關東煮、烤雞串。", googleMap: "https://maps.app.goo.gl/p1kugnNpmNRkJ8zo9", icon: "beer-mug-empty" },
    { category: "燒肉", title: "藥院燒肉 Nikuichi", desc: "CP值超高的黑毛和牛燒肉。", googleMap: "https://maps.app.goo.gl/31KTWuaso1aiHCNp8", icon: "fire" },

    // --- 博多車站周邊美食 ---
    // 拉麵
    { category: "博多豚骨拉麵", title: "博多一雙 (Hakata Issou)", desc: "號稱「豚骨卡布奇諾」，湯頭極濃郁 (博多車站東本店)", googleMap: "https://www.google.com/maps/search/博多一双+博多駅東本店", icon: "bowl-food" },
    { category: "博多豚骨拉麵", title: "博多拉麵 ShinShin (博多店)", desc: "深受藝人喜愛，湯頭圓潤好入口 (博多 DEITOS)", googleMap: "https://www.google.com/maps/search/博多らーめん+ShinShin+博多デイトス店", icon: "bowl-food" },
    { category: "博多豚骨拉麵", title: "博多一幸舍 (博多本店)", desc: "充滿泡沫的元祖濃郁豚骨", googleMap: "https://www.google.com/maps/search/博多一幸舎+博多本店", icon: "bowl-food" },
    { category: "博多豚骨拉麵", title: "一蘭拉麵 (博多店)", desc: "知名度高，有個人座位 (博多 Sun Plaza 地下街)", googleMap: "https://www.google.com/maps/search/一蘭+博多店", icon: "bowl-food" },

    // 內臟鍋
    { category: "內臟鍋", title: "博多牛腸鍋 樂天地", desc: "韭菜堆成山，湯頭濃郁重口味 (博多站前店)", googleMap: "https://www.google.com/maps/search/博多もつ鍋+楽天地+博多駅前店", icon: "fire" },
    { category: "內臟鍋", title: "博多牛腸鍋 大山 (Oyama)", desc: "味噌口味最有名，裝潢較高級 (KITTE 博多 9F)", googleMap: "https://www.google.com/maps/search/博多もつ鍋+おおやま+KITTE博多", icon: "fire" },
    { category: "內臟鍋", title: "博多牛腸鍋 一鷹", desc: "湯頭清爽，內臟處理乾淨 (博多本店)", googleMap: "https://www.google.com/maps/search/博多もつ鍋+一鷹+博多本店", icon: "fire" },
    { category: "內臟鍋", title: "牛腸鍋 山中 (Yamanaka)", desc: "老字號名店，環境優雅 (博多店)", googleMap: "https://www.google.com/maps/search/博多もつ鍋+やま中+博多店", icon: "fire" },

    // 烏龍麵
    { category: "博多烏龍麵", title: "大地烏龍麵 (Daichi no Udon)", desc: "巨大的圓形炸牛蒡天婦羅是招牌 (博多站地下街)", googleMap: "https://www.google.com/maps/search/大地のうどん+博多駅地下店", icon: "bowl-rice" },
    { category: "博多烏龍麵", title: "烏龍平 (Udon Taira)", desc: "人氣排隊店，手打麵條口感佳 (住吉)", googleMap: "https://www.google.com/maps/search/うどん平", icon: "bowl-rice" },
    { category: "博多烏龍麵", title: "葉隱烏龍麵", desc: "米其林必比登推薦，麵條扁平滑順", googleMap: "https://www.google.com/maps/search/葉隠うどん", icon: "bowl-rice" },

    // 燒肉
    { category: "燒肉", title: "Nikuichi (博多店)", desc: "超人氣店，CP值高，強烈建議預約", googleMap: "https://www.google.com/maps/search/肉いち+博多店", icon: "fire" },
    { category: "燒肉", title: "燒肉 Champion", desc: "高品質和牛，適合慶祝 (JR 博多 City 10F)", googleMap: "https://www.google.com/maps/search/焼肉チャンピオン+JR博多シティ店", icon: "fire" },

    // 壽司與海鮮
    { category: "壽司與海鮮", title: "壽司酒場 Sashisu", desc: "時髦居酒屋，料理創意價格親民 (博多 Ming 橫丁)", googleMap: "https://www.google.com/maps/search/すし酒場+さしす+博多マイング店", icon: "fish" },
    { category: "壽司與海鮮", title: "迴轉壽司 博多魚河岸", desc: "早晨營業，食材新鮮 (博多 1 番街)", googleMap: "https://www.google.com/maps/search/博多魚がし+博多1番街店", icon: "fish" },
    { category: "壽司與海鮮", title: "海鮮居酒屋 海風土", desc: "500日圓生魚片拼盤 (需確認活動)", googleMap: "https://www.google.com/maps/search/海鮮居酒屋+海風土", icon: "fish" },

    // 居酒屋/燒鳥
    { category: "居酒屋", title: "雞肉酒場 (Tori Sakaba)", desc: "各式雞肉料理，含雞皮", googleMap: "https://www.google.com/maps/search/博多応援団+とり酒場", icon: "beer-mug-empty" },
    { category: "居酒屋", title: "博多 Mata", desc: "氣氛放鬆，適合聚餐", googleMap: "https://www.google.com/maps/search/博多+また", icon: "beer-mug-empty" },
    { category: "燒鳥 (雞皮)", title: "串燒 とりかわ大臣", desc: "博多雞皮名店，價格親民 (KITTE 博多 B1)", googleMap: "https://www.google.com/maps/search/博多とりかわ大臣+KITTE博多串房", icon: "fire" },
    { category: "燒鳥 (雞皮)", title: "酒家雞處 炭寅", desc: "使用三瀨雞，炭火香氣足", googleMap: "https://www.google.com/maps/search/酒家鶏処+炭寅+博多店", icon: "fire" },
    { category: "燒鳥 (雞皮)", title: "燒鳥 晴爾", desc: "評價極高的隱藏名店 (住吉)", googleMap: "https://www.google.com/maps/search/焼鳥+晴れる屋", icon: "fire" },

    // 餃子
    { category: "一口餃子", title: "博多 祇園 鐵鍋", desc: "鐵鍋煎餃代表名店，外酥內多汁", googleMap: "https://www.google.com/maps/search/博多祇園鉄なべ", icon: "utensils" },
    { category: "一口餃子", title: "餃子屋 Ni-no-Ni", desc: "熱鬧居酒屋，餃子便宜好吃", googleMap: "https://www.google.com/maps/search/餃子屋+弐ノ弐+博多駅地下街店", icon: "utensils" },
    { category: "一口餃子", title: "旭軒 本店", desc: "老字號，餃子皮薄脆，推烤雞翅", googleMap: "https://www.google.com/maps/search/旭軒+駅前本店", icon: "utensils" },

    // 早餐/麵包/咖啡
    { category: "早餐", title: "TANYA (Tanshiya)", desc: "超人氣牛舌早餐定食 (博多 1 番街)", googleMap: "https://www.google.com/maps/search/たんや+HAKATA+博多一番街店", icon: "mug-hot" },
    { category: "早餐", title: "喜水丸", desc: "早餐時段明太子無限吃到飽 (博多 1 番街)", googleMap: "https://www.google.com/maps/search/喜水丸+博多1番街店", icon: "mug-hot" },
    { category: "早餐", title: "内野雞蛋直販所", desc: "生雞蛋拌飯、親子丼專賣 (博多站內 Ming)", googleMap: "https://www.google.com/maps/search/うちのたまご+直売所", icon: "egg" },
    { category: "麵包", title: "Bread Espresso & Hakata", desc: "法式吐司有名", googleMap: "https://www.google.com/maps/search/パンとエスプレッソと博多っと", icon: "bread-slice" },
    { category: "麵包", title: "BOUL'ANGE", desc: "美味的可頌麵包", googleMap: "https://www.google.com/maps/search/BOUL'ANGE+博多", icon: "bread-slice" },
    { category: "咖啡", title: "NOOICE hakata", desc: "澳洲風格早午餐", googleMap: "https://www.google.com/maps/search/NOOICE+hakata", icon: "mug-hot" },

    // 明太子
    { category: "明太子", title: "元祖博多明太重", desc: "整條明太子海苔飯 (建議去西中洲本店)", googleMap: "https://www.google.com/maps/search/元祖博多めんたい重", icon: "bowl-rice" },
    { category: "明太子", title: "博多 椒房庵", desc: "茅乃舍旗下，精緻釜飯與明太子 (JR 博多 City 9F)", googleMap: "https://www.google.com/maps/search/博多+椒房庵", icon: "bowl-rice" }
  ]
};
