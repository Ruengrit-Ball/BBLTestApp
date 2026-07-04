import { useQuery } from '@tanstack/react-query';

import { ProductService } from './bbl-service';

const productService = new ProductService();

export const useGetProductList = (enabled = true) => {
    return useQuery({
        queryKey: ['GET_PRODUCT_LIST'],
        queryFn: () => productService.getProductList(),
        enabled,
        retry: 0,
    });
};