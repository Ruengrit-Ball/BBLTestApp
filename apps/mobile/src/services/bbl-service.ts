export interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    rating: {
        rate: number,
        count: number
    };
}

export class ProductService {
    private readonly baseUrl: string;
    private readonly urlPath: string;

    constructor() {
        this.baseUrl = 'https://fakestoreapi.com/';
        this.urlPath = 'products'
    }

    async getProductList(): Promise<Product[]> {
        const response = await fetch(`${this.baseUrl}/${this.urlPath}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`GET /products failed: ${response.status}`);
        }

        return response.json();
    }
}

