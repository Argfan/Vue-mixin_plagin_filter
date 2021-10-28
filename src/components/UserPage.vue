<template>
  <div class="user-page pt-5">
    <div class="form-group">
      <button type="button" class="btn btn-primary" 
        @click="openModal">
        OpenModal
      </button>
    </div>    
    
    <div class="form-group">
      <label for="t1">Пример текстового поля</label>
      <textarea class="form-control" id="t1" rows="3" v-model="textArea"></textarea>
    </div>
    <p :inner-html.prop="textArea | upperCase | emoji">
      <!-- {{textArea | upperCase | emoji}} -->
    </p>
    <p :inner-html.prop="textArea | marked"></p>
    

    <Modal
      v-if="isModalOpen"
      title="Очень важнач информация"
      @close="isModalOpen = false"
    >
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam laboriosam repellendus dolorem enim. Magnam reiciendis quae doloribus aut cum provident odio dignissimos quidem rerum sit repellat iste, ipsum voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam laboriosam repellendus dolorem enim. Magnam reiciendis quae doloribus aut cum provident odio dignissimos quidem rerum sit repellat iste, ipsum voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam laboriosam repellendus dolorem enim. Magnam reiciendis quae doloribus aut cum provident odio dignissimos quidem rerum sit repellat iste, ipsum voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam laboriosam repellendus dolorem enim. Magnam reiciendis quae doloribus aut cum provident odio dignissimos quidem rerum sit repellat iste, ipsum voluptatum.
        </p>
      </div>
      <!-- <template v-slot:footer>
            <button type="button" class="btn btn-secondary" @click="closeModal">Закрыть 2</button>
            <button type="button" class="btn btn-primary">Сохранить изменения 2</button>
      </template> -->
    </Modal>
  </div>
</template>

<script>

import Modal from './Modal'

export default {
  name: 'UserPage',
  components: {
    Modal
  },
  data(){
    return{
      textArea: '',
      isModalOpen : false
    }
  },
  methods: {
    openModal(){
      this.isModalOpen = true
    }
  },
  filters: {
    upperCase(value){
      return value.toUpperCase()
    },
    emoji(value){
      return value.replace(':)', '😀')
    }
  }
  
}
</script>


