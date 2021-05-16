export async function getMentalAgeData(id) {
    return {
      id,
      title: "精神年齢アドバイザー",
      description: `あなたの精神年齢は${id}歳です！幼稚園児と同じレベル。精神年齢を高めるには、さらなる努力が必要です。`
    }
}

export function getAgeText(age) {
    let text = "";
    if(age < 0){
        text = "精神年齢として、0歳にも達していない未熟な状態です。赤ちゃんからやり直しましょう！"
    } else if (age < 4){
        text = "幼稚園児と同じレベル。精神年齢を高めるには、さらなる努力が必要です。"
    }
    return `あなたの精神年齢は${age}歳です！`
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
