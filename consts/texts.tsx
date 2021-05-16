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
            point: 9
        }, {
            text: "時々言われる", 
            point: 3,
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
            point: -3,
        }, {
            text: "全くそうでない",
            point: -5}]
    }, 
    {
        id: 2, 
        title: "人を殴ったことがある",
        descriptions: [{
            text: "頻繁にある",
            point: -8
        }, {
            text: "時々ある", 
            point: -4,
        }, {
            text: "あまりない",
            point: 6,
        }, {
            text: "全くない",
            point: 12}]
    }, 
    {
        id: 3, 
        title: "人に同情することが多い",
        descriptions: [{
            text: "頻繁にある",
            point: 10
        }, {
            text: "時々ある", 
            point: 7,
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
            point: 9
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
