import { ref } from 'vue'

export function useFetchProducts() {
    // Create reactive variables
    const products = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Function to fetch products by category
    const fetchProducts = async (category) => {
        loading.value = true
        error.value = null
        
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await response.json()
            products.value = data.products
        } catch (err) {
            error.value = 'Failed to fetch products'
            console.error('Error fetching products:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        products,
        loading,
        error,
        fetchProducts
    }
}

