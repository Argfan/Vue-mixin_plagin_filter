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
        <div class="modal-body" @scroll="onBodyScroll" ref="modalBody">
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

export default {
  name: 'Modal',
  data(){
    return{
      isRulesReaded: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    onBodyScroll(){
      const modalBody = this.$refs.modalBody
      if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
        this.isRulesReaded = true
      }
      else this.isRulesReaded = false
    }
  },
  mounted() {
    const modalBody = this.$refs.modalBody
    // modalBody.scroll(0, modalBody.scrollHeight - modalBody.clientHeight)
    modalBody.scrollTop = modalBody.scrollHeight - modalBody.clientHeight
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

