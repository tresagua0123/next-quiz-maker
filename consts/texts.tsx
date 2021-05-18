type SelectedQuestion = {
    id: number;
    title: string;
    descriptions: 
        {
        text: string;
        point: number;
        }[];
}

export const MENTAL_AGE_QUESTIONS: SelectedQuestion[] = [
    {
        id: 0, 
        title: "落ち着いているねとよく言われる",
        descriptions: [{
            text: "頻繁に言われる",
            point: 12
        }, {
            text: "時々言われる", 
            point: 6,
        }, {
            text: "あまり言われない",
            point: -1,
        }, {
            text: "全く言われない",
            point: -10}]
    }, 
    {
        id: 1, 
        title: "弱者の味方である",
        descriptions: [{
            text: "常にそう",
            point: 16
        }, {
            text: "時々そう", 
            point: 11,
        }, {
            text: "あまりそうでない",
            point: -1,
        }, {
            text: "全くそうでない",
            point: -2}]
    }, 
    {
        id: 2, 
        title: "周りのことよりも、自分中心で動くことが多い",
        descriptions: [{
            text: "頻繁にある",
            point: -4
        }, {
            text: "時々ある", 
            point: -2,
        }, {
            text: "あまりない",
            point: 8,
        }, {
            text: "全くない",
            point: 12}]
    }, 
    {
        id: 3, 
        title: "人に同情することが多い",
        descriptions: [{
            text: "頻繁にある",
            point: 12
        }, {
            text: "時々ある", 
            point: 8,
        }, {
            text: "あまりない",
            point: -2,
        }, {
            text: "全くない",
            point: -4}]
    },
    {
        id: 4, 
        title: "自分だけでなく周囲を考えて行動する",
        descriptions: [{
            text: "頻繁にする",
            point: 10
        }, {
            text: "時々する", 
            point: 7,
        }, {
            text: "あまりしない",
            point: -2,
        }, {
            text: "全くしない",
            point: -5}]
    },
   
]
