// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const photos = [
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t51.75761-15/514200379_18334482307166194_7339768496158890186_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZIzupc9dPz0Q7kNvwFSbIPA&_nc_oc=AdkT4WIoG9NMmYaNSa4aXgsP2Yga-ofw5skvyDxJYnOgZoYKM8jNH_IEJJewkTnw05Q&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=JWjaGDLuxvD4t31buJlwTQ&oh=00_AfThEXb_caV0KfeyGVJ1qt8uSdCCceQ_7bvm2KdcKVQn3A&oe=687D06EF",
        title: "Image 1",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t51.75761-15/514490837_18334482304166194_8611412133887317731_n.webp?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qRpV1TZNJHwQ7kNvwHJvBY4&_nc_oc=AdncJBM7Bp2_JJ18H-eW6AQuRTXT8ijonS9h53ADtziXXkya13GIisZZIVMpLH2JtJU&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=Rnkb5DvmgCPUlaMPZu8Mcg&oh=00_AfTlEeCyGgbfD6FF_-DdlVihIP3bw9uCr_fVKna1Grs5wA&oe=687D01A4",
        title: "Image 2",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t51.75761-15/500774371_18330983878166194_3362974536275821480_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bJjm1VVLikQ7kNvwFd0CJ6&_nc_oc=AdkSfCg5M-PIo-ezFLxEPGdBV5LttsvTVRWx6JZ2F6TqwkfzedKIrJt3OzUjx3hNNwI&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=DlhwBKUI5VJLu5Xx_Y0Q9Q&oh=00_AfRAGH6YGxbUUy5AwWSwhKpwK31bFlPI_Cq6GiKV6HBF0A&oe=687CFE33",
        title: "Image 3",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t51.75761-15/475328913_18318795601166194_6566832916841845760_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sRRK5YQPFlQQ7kNvwEzIjU2&_nc_oc=AdnpvURFt1eCM-uFSo0RtCtWgX8ZOSXyYNdX3vmoxXI7hBI5w9kZu0oBXEC_l1-1gOE&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=7F7bblbkr6wWsheIuDQ7Kg&oh=00_AfS6P8C6BqmO9USQwBHcPx84u5qer7tY85vwkClMeseqsA&oe=687CFDC3",
        title: "Image 4",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/484310374_2046027639257708_8620962310515822144_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xVs7qMzzhYoQ7kNvwGO8BvJ&_nc_oc=Adk987CIJE2TxTEUYr-Q7bQjINsDGZ7QUR8lfWlY0MsyO-o2a4ikIkckP_xdEuO3lxw&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=QmOE7DOrc6Gj-yAceOnAew&oh=00_AfQbfE1bKX0AOZoKVRZobrcL90GXtf_YETPvAfNNDH20Xg&oe=687D2735",
        title: "Image 5",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/484821878_2046002849260187_4673438120604142574_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2KbtSSp03U8Q7kNvwGopmkp&_nc_oc=AdkSTzQ3BbuY0c27TRmBguvPK3Pdf5UhEcWDXeP3dxyprFfggjnySqhGlNw1lxisRgw&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=M5bxGHT55l_IR-U6ZZREhg&oh=00_AfS4300A3Iu7aPYX9MAJ-jElWdH_FrmN7xR8yPBavbFUnw&oe=687D1A56",
        title: "Image 6",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t51.75761-15/500398263_18330848959166194_8153995718686288446_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uHXOxeJRYskQ7kNvwEs2Qmd&_nc_oc=AdkUd7dZnQGJ0gBKRQ1-Vu_jiCE1RtaRSXYI-SzwgWala_Av_LBgZLNRHYKQ6qFFKpg&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=hRIOfUSV10Jtnv93qGezqg&oh=00_AfRoCaEUwe9c5vs4rEUxssc3LBfaz4d5KGu-8r5TZWxijA&oe=687D0568",
        title: "Image 7",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1639936014191-130ed8733401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 8",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1639930451315-be32be3b91a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 9",
        width: 4,
        height: 3
    },
];

export default function allHandler(req, res) {
    res.status(200).json(photos);
};

