<template>
  <div class="entry-container mb-3 pointer p-2" 
    @click="$router.push({name:'entry', params: {id:10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa, illo velit laborum, architecto, consequuntur sed deserunt optio laboriosam obcaecati odit non iusto tenetur vel. Voluptate iusto inventore mollitia aliquam!
    </div>
  </div>
</template>

<script>
export default {

}
</script>
    
<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2ce350;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }
        .entry-description{
            font-size: 12px;
        }

    }
</style>