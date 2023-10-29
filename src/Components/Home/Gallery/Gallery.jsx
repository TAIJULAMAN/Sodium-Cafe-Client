import PhotoAlbum from "react-photo-album";

const Gallery = () => {
    const photos = [
    { src: "https://i.ibb.co/f2X8Hg5/284061962-129330293095229-1976815081742916088-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/Fb335KD/284119174-129330273095231-3713095174739610154-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/xSbt7Fc/285632711-129330206428571-6229720202093866769-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/6wjsbNw/310452000-131852712937874-2441882439293193252-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/5rQhhck/322732669-707127727616389-3201579318313229046-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/CKdpJYR/324257943-515720813877751-2723722206636317839-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/7jXdYfb/326504029-899583938150562-8193377277931704285-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/tMnfZY7/326572119-649267750285829-8641438524231294392-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/Bs7H7CD/326544695-724837149352388-5045875063496975121-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/kc4nQs4/326707036-1602165200299191-4006296919617280571-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/zfFgGH8/326724828-1948989028797990-274212489496185153-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/jwNwrss/326754206-1214294482548237-170408358959010141-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/dW2T0Gp/326760326-1140126300036743-3301005408378257037-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/YpQkC9p/326799851-725116205998278-1257125550988740233-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/hYzmgQb/328256444-704758481118036-3373510113413564532-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/XkpGs3r/340862783-186502267568531-6835147265039642557-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/GknhYQY/344580256-1303841113883488-215349476558999686-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/nj7VSJw/356191283-251883590934785-4547699157581945233-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/gvDGVK7/358136791-257382457051565-7958122662613401338-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/2sdJ553/371764213-275229228600221-4686000559118938464-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/hD8Vy0T/373709401-275229205266890-1212038920256944674-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/f2NtXTb/387060316-295805659875911-7999618555399520568-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/xGkL2Jw/394245206-303729645750179-5479418151495119768-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/3fh34Mw/395764636-306413272148483-4875671527346292732-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/jZQ1Mdz/358714228-251883667601444-1418466210052208372-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/yRmgXRk/358140578-257382397051571-7907686170106577061-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/tB9Kh7F/363922056-257382333718244-6956887524997311248-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/mC354Hq/328230815-672005681368824-3847146826977812176-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/8NmHw31/328261790-3517759381828383-4485901392394785314-n.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/yV14gZY/328483479-1151413062227017-5023471650219950926-n.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/Kb2nBb4/295329287-146310991397159-2425672390976444188-n.jpg", width: 800, height: 600 },
 
];
    return (
        <PhotoAlbum className='gap-4' layout="rows" photos={photos} />
    );
};

export default Gallery;
