export class Mainstockin {
    lotid: number;
    hcode: string;
    mid: number;
    datestockin: string;
    supid: number = 0;
    numstockin: number;
    pricen: number;
    pricelot: number;
    notelot: string;
    expire: number;
    mcode: string;
    usernames: string;
    mname: string;
    numberid: string;
    munit: string;
}

export class Mainstockout {
    soid: number;
    lotnumber: number = 0;
    username: string;
    datestockout: string;
    lastupdate: string;
    numstockout: string;
    mid: number;
    hcode: string;
    receiver: number = 0;
    priceout: number;
    stdel: number;
    usernames: string;
    pricen: number;
    numstockin: any;
    notelot: string;
    expire: number;
    mcode: string;
    mname: string;
    numnow: number;
    numold: string;
}

export class MainproductDt {
    mid: number;
    catid: number;
    mcode: string;
    mname: string;
    munit: string;
    numnow: number;
    tag: string;
    prunit61: number;
    lastupdate: string;
    hcode: string;
    genname: string;
    nummin: number;
    usernames: string;

}