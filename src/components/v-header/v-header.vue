<template>
  <div class="headWrap">
    <SmallIcon></SmallIcon>
  </div>
</template>

<script>
  import SmallIcon from 'components/small-icon/small-icon'

    export default {
        name: 'v-header',
        props: {
          seller: {
            type: Object,
            default() {
              return {}
            }
          }
        },
        components: {
           SmallIcon
        },
        created() {
          console.log(this.seller)
        }
    }
</script>

<style scoped lang="stylus">

</style>
