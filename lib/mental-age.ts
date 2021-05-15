export async function getMentalAgeData(id) {
    return {
      id,
      title: "精神年齢アドバイザー",
      description: `あなたの精神年齢は${id}歳です！幼稚園児と同じレベル。精神年齢を高めるには、さらなる努力が必要です。`
    }
  }