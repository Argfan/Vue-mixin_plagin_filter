<template>
  <div class="user-page pt-5">
    <button type="button" class="btn btn-primary" 
      @click="openModal">
      OpenModal
    </button>
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
      isModalOpen : false
    }
  },
  methods: {
    openModal(){
      this.isModalOpen = true
    }
  }
  
}
</script>


