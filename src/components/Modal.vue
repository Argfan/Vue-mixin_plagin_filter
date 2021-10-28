<template>
  <div class="modal fade show" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ title }} </h5>
          <button type="button" class="close" @click="closeModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" @scroll="onScroll">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Отмена</button>
              <button type="button" class="btn btn-primary" :disabled="!isRulesReaded">Принять</button>
          </slot>         
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//import SrollHandler from "../mixins/srollHandler"; Локаольно подключать

export default {
  name: 'Modal',
  data(){
    return{
      isRulesReaded: false
    }
  },
  // mixins: [SrollHandler], Локаольно подключать
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  created(){
    this.$myMethod()
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    onScrollEnd(){
			this.isRulesReaded = true
		}

  }
  
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}
</style>

