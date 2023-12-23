  <template>
    <button-component @click="openModal ">Open Modal</button-component>

    <div id="myModal" class="modal" ref="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
          <p>{{ text }}</p>
      </div>
    </div>
  </template>

  <script>
    import ButtonComponent from "../components/ButtonComponent.vue";
      export default {
        components: {
          ButtonComponent
        },
        data() {
          return {}
        },
        props: {
          text:{
            type: String,
            default: "Some text in the Modal"
          },
        },
        methods: {
          openModal(){
            this.$refs.modal.style.display = "block";
          },
          closeModal(){
            this.$refs.modal.style.display = "none";
          }
        }
      }
  </script>

  <style scoped>
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
      background-color: #fefefe;
      margin: auto auto;
      padding: 20px;
      border: 1px solid #888;
      width: 50%;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      padding: 4px;
      width: fit-content;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  </style>