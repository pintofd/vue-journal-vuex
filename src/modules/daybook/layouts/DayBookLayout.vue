<template>
    <nav-bar/>
    <div class="d-flex">
        <entry-list class="col-4"/>
        <div class="col bg-secondary">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent} from 'vue'
export default {
    components:{
        NavBar: defineAsyncComponent(() => 
        import ('@/modules/daybook/components/NavBar.vue')),
        EntryList: defineAsyncComponent(() => 
        import ('@/modules/daybook/components/EntryList.vue')
        ),
        
    }
}
</script>