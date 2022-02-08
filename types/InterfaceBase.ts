export interface Header {
    id: string;
    name: string;
    type: string|Object;
    surce: string|Object;
    locale: string;
    createAt: string;
    UpdateAt: string;
}

export interface Body {
    /**
     * Metadata servirebbe per inserire un qualsiasi oggetto tipizzato con dei dati custom
     */
     metaData?: Object;
     /**
     * Settings servirebbe per definire dei settings customs
     */
    settings?: Object;
}

export interface Base {
    header: Header;
    /**
     * Il body mi piacerebbe poterlo definire come un qualsiasi oggetto tipizzato e non solo un oggetto generico.
     */ 
    body: Object; 
}