type SelectedQuestion = {
    id: number;
    title: string;
    descriptions: {
        text: string;
        point: number;
    }[];
};

export const YAMAGUCHI_QUESTIONS: SelectedQuestion[] = [
    {
        id: 0,
        title: '「特牛」読み方は？',
        descriptions: [
            {
                text: 'こっとい',
                point: 1,
            },
            {
                text: 'とくうし',
                point: 0,
            },
            {
                text: 'とくぎゅう',
                point: 0,
            },
            {
                text: 'とっこい',
                point: 0,
            },
        ],
    },
    {
        id: 1,
        title: '山口県に隣接している県はどれ？',
        descriptions: [
            {
                text: '福岡県',
                point: 0,
            },
            {
                text: '鳥取県',
                point: 0,
            },
            {
                text: '島根県',
                point: 1,
            },
            {
                text: '香川県',
                point: 0,
            },
        ],
    },
    {
        id: 2,
        title: '山口県が漁獲量日本一の魚は？',
        descriptions: [
            {
                text: 'いわし',
                point: 0,
            },
            {
                text: 'ふぐ',
                point: 1,
            },
            {
                text: 'さんま',
                point: 0,
            },
            {
                text: 'ほっけ',
                point: 0,
            },
        ],
    },
    {
        id: 3,
        title: '山口県にない市は？',
        descriptions: [
            {
                text: '岩国市',
                point: 0,
            },
            {
                text: '下関市',
                point: 0,
            },
            {
                text: '益田市',
                point: 1,
            },
            {
                text: '長門市',
                point: 0,
            },
        ],
    },
    {
        id: 4,
        title: '山口県内で展開するスーパーと言えば？',
        descriptions: [
            {
                text: 'スーパーまるき',
                point: 1,
            },
            {
                text: 'スーパーはなみずき',
                point: 0,
            },
            {
                text: 'スーパーうべ',
                point: 0,
            },
            {
                text: 'スーパーながと',
                point: 0,
            },
        ],
    },
];
