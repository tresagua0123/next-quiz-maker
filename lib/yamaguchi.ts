export async function getYamaguchiData(id) {
    return {
        id,
        title: '県民なら誰でも知っている？！山口県クイズ',
        description: getText(id),
    };
}

export function getText(id) {
    let text = '';
    const point = Number(id);
    if (point === 0) {
        text =
            '山口県のことを全く知らないレベルです。まずは場所から覚えてください。';
    } else if (point === 1) {
        text =
            '山口県のことをほとんど知らないレベルです。山口県について、もっと知ってください。';
    } else if (point === 2) {
        text =
            '山口県のことをちょっとは知っているレベルです。よけえ知っとるね！';
    } else if (point === 3) {
        text = '山口県のことをだいぶ知っているレベルです。よけえ知っとるね！';
    } else if (point === 4) {
        text = '山口県のことをぶち知っとるレベル。あなたはほぼ県民です！';
    } else if (point === 5) {
        text = 'おめでとうございます！あなたは正真正銘、山口県民です。';
    }
    return text;
}
