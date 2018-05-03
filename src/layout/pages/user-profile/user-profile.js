//-import AddArticle from '../../../components/add-article/add-article.vue'
//-import SpinnerBtn from '../../../components/spinner-btn'
import {db, Storage} from "../../../core/dataBase";
import { logoutUser } from '../../../core/loginUser';
export const AddArticle = () => import(/* webpackChunkName: 'AddArticle' */ '../../../components/add-article/add-article.vue');
export const SpinnerBtn = () => import(/* webpackChunkName: 'SpinnerBtn' */ '../../../components/spinner-btn');

export default {
  name: 'UserProfile',


  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        avatar: '',
        bg: '',
        social: {
          facebook: '',
          //'google-plus': '',
          instagram: '',
          linkedin: '',
          twitter: '',
          youtube: '',
          pinterest: '',
          rss: '',
        },
      },
      sendForm: false,
      tabs: '',
      ID: '',
    }
  },
  created: function () {
    this.loadUser();
  },
  methods: {
    returnToLogin () {
      this.$router.replace('/sign-in');
    },
    loadUser(){
      let userID = localStorage.getItem('userId');
      if (userID) {
        this.ID = userID;
        db.ref('users/' + userID)
          .once('value')
          .then(
            (s)=>{
              if (s.val()) {
                this.user = s.val();
              }
              else {
                localStorage.setItem('userId', false);
                this.returnToLogin();
              }
        });
      }
      else {
        this.returnToLogin();
      }
    },
    saveUser() {
      db.ref('users/' + this.ID).set({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        avatar: this.user.avatar,
        bg: this.user.bg,
        social: {
          facebook: this.user.social.facebook,
          //'google-plus': this.user.google-plus,
          instagram: this.user.social.instagram,
          linkedin: this.user.social.linkedin,
          twitter: this.user.social.twitter,
          youtube: this.user.social.youtube,
          pinterest: this.user.social.pinterest,
          rss: this.user.social.rss,
        },
      });
      this.tabs = "";
    },
    cancelUser() {
      this.loadUser();
      this.tabs = "";
    },
    pushUserAvatar (e) {
      const prefix = 'avatar';
      this.pushImg(e, prefix);
    },
    pushUserBg (e) {
      const prefix = 'bg';
      this.pushImg(e, prefix);
    },
    deleteUserAvatar() {
      db.ref().child('users/' + this.ID).update({ avatar: '' });
      this.user.avatar = '';
    },
    deleteUserBg() {
      db.ref().child('users/' + this.ID).update({ bg: '' });
      this.user.bg = '';
    },
    pushImg (e, prefix) {
      const metadata = {
        contentType: 'image/jpeg',
      };

      e.preventDefault();
      let img = e.target.files[0];
      let uploadTask = Storage.ref('users/' + this.ID + '-' + prefix + '.jpg').put(img, metadata);

      uploadTask.on('state_changed',
        function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case Storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case Storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        },
        function(error) {
          console.log(error);
        },
        () => {
        if (prefix === 'avatar') {
          this.user.avatar = uploadTask.snapshot.downloadURL;
        }
        else {
          this.user.bg = uploadTask.snapshot.downloadURL;
        }
          this.saveUser();
      });
    },
    logoutUser
  },
  computed: {
    isSocial() {
      for (let item in this.user.social) {
        if(this.user.social[item]) {
          return true
        }
      }
      return false
    },
    userBgImg() {
      if(this.user.bg) {
        return 'background-image: url(' + this.user.bg + ')';
      }
      else {
        return 'background: #707070 url("https://cdn3.housetipster.com/static-img/ht_pattern.png") repeat 0 0';
      }
    }
  },
  components: {
    AddArticle,
    SpinnerBtn
  }
}
