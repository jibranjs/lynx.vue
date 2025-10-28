import { ref } from 'vue'

export function useFetchCategories() {
    // Create reactive variables
    const categories = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Function to fetch products by category
    const fetchCategories = async () => {
        loading.value = true
        error.value = null
        
        try {
            const response = await fetch(`https://dummyjson.com/products/categories`)
            const data = await response.json()
            categories.value = data
        } catch (err) {
            error.value = 'Failed to fetch Categories'
            console.error('Error fetching Categories:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        categories,
        loading,
        error,
        fetchCategories
    }
}

