import { ref } from "vue";

export function useFetchCategory(){
    const categories = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchCategories = async () =>{
        loading.value = true
        error.value = null
        activeCategory = "smartphones"

        if(!category){
            category.value = activeCategory
        }
        try{
            const response = await fetch(`https://dummyjson.com/products/category/${categories}`)
            const data = await response.json()
            console.log(data);
        }catch(error){
            error.value = 'Failed to Fetch'
            console.error('Error!', err)
        } finally{
            loading.value = false
        }
    }
    return{
        categories,
        loading,
        error,
        fetchCategories
    }
}