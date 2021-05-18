export async function getMentalAgeData(id) {
    return {
      id,
      title: "精神年齢アドバイザー",
      description: `あなたの精神年齢は${id}歳です！` + getAgeText(id)
    }
}

export function getAgeText(age) {
    let text = "";
    if(age < -10){
        text = "まさに極悪非道！精神年齢が低すぎて、大幅なマイナスという結果に。。"
    } else if (age < 0) {
        text = "精神年齢として、0歳にも達していない未熟な状態です。赤ちゃんからやり直しましょう！"
    } else if (age < 5){
        text = "幼稚園児と同じ精神レベル。まずは社会のルールを覚えることから始めましょう。"
    } else if (age < 12) {
        text = "子どもと同じ精神レベル。早く大人になってください。"
    } else if (age < 20) {
        text = "精神年齢１０代並み。社会の並みに揉まれて、更に精神年齢を高めてください。"
    } else if (age < 30) {
        text = "精神年齢社会人並み。良識を持った普通の精神年齢です。"
    } else if (age < 40) {
        text = "荒波を乗り越えてきた人生です。"
    } else {
        text = "仙人並みの精神年齢の持ち主です。"
    }
    return text;
} 


// TODO: Canvasで生成した画像をfirestoreに保存する。
// export function getCanvasElem(age) {

//     // var Canvas = require("canvas"); // node-canvasの読み込み
//     // require("node-easel"); // node-easelの読み込み

//     const width = 255;
//     const height = 255;

//     //    const canvasElem = document.createElement('canvas')
//     //    canvasElem.width = width
//     //    canvasElem.height = height
//     //    const ctx = canvasElem.getContext('2d')
   
//     //    // draw
//     //    if(ctx === null) return;
   
//     //    ctx.clearRect(0, 0, width, height)
//     //    ctx.fillStyle = "yellow"
//     //    ctx.fillRect(0, 0, width, height)
 
//     //    ctx.font = "16pt Arial";
//     //    ctx.fillStyle = "blue"
//     //    ctx.fillText(`あなたの精神年齢は${age}歳です！`, 0, 50)
//     //    ctx.fillText("あなたの言語は英語です！", 0, 122)

//         //
//     const { createCanvas, loadImage } = require('canvas')
//     var canvasElem = createCanvas(400, 400); // Canvasの作成
//     canvasElem.width = width
//     canvasElem.height = height
//     const ctx = canvasElem.getContext('2d')

//     // draw
//     if(ctx === null) return;

//     ctx.clearRect(0, 0, width, height)
//     ctx.fillStyle = "yellow"
//     ctx.fillRect(0, 0, width, height)

//     ctx.font = "16pt Arial";
//     ctx.fillStyle = "blue"
//     ctx.fillText(`あなたの精神年齢は${age}歳です！`, 0, 50)
//     ctx.fillText("あなたの言語は英語です！", 0, 122)
//     //
//        return canvasElem.toDataURL();
//    }
