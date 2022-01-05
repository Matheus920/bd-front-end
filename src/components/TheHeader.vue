// Reafatorar nomes de classe

<template>
  <header class="main-header">
    <div class="flex w-2/3 gap-4 items-center">
      <div class="logo font-bold">
        <span class="first-part">Get</span>
        <span class="second-part">here</span>
      </div>
      <form class="search-form relative flex w-full focus:w-full">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817
          4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="search"
          type="text"
          aria-label="Pesquisar evento"
          placeholder="Pesquisar evento"
        />
      </form>
    </div>
    <div class="user-actions w-30 flex w-1/5 gap-1.5">
      <button class="btn sign-in"  @click="handleClickSignIn">
        Sign-in
      </button>
      <button class="btn login" @click="handleClickLogin">
        Login
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isInit: false,
      isSignIn: false,
    };
  },
  methods: {
    async handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then(async (authCode) => {
          // on success
          // eslint-disable-next-line no-unused-vars
          let data = '';
          data += `${process.env.VUE_APP_CLIENT_ID}&`;
          data += `${process.env.VUE_APP_CLIENT_SECRET}&`;
          data += 'redirect_uri=postmessage&';
          data += 'grant_type=authorization_code';
          data += `code=${authCode}&`;

          // Victor server-side
          // const response = await fetch('https://www.googleapis.com/oauth2/v4/token', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded',
          //   },
          //   body: data,
          // });
          console.log('authCode', authCode);
          // console.log('response', response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          console.log('GoogleUser', GoogleUser);
          console.log('getId', GoogleUser.getId());
          console.log('getBasicProfile', GoogleUser.getBasicProfile());
          console.log('getAuthResponse', GoogleUser.getAuthResponse());
          console.log(
            'getAuthResponse',
            this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse(),
          );
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleClickSignOut() {
      this.$gAuth
        .signOut()
        .then(() => {
          // on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    // in app
    const that = this;
    const checkGauthLoad = setInterval(() => {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
};
</script>

<style scoped lang="scss">
.main-header {
  @apply flex gap-4 items-center justify-between w-screen bg-white;
  padding: 1.5rem 1.2rem 1.5rem;
  box-shadow: rgba(128, 128, 133, 0.2) 0px 7px 29px 0px;
  .logo {
    font-size: 2em;
    .firs-part {
      color: $dark_blue;
    }
    .second-part {
      color: $baby_blue;
    }
  }
  .search-form {
    .search {
      @apply flex w-2/4 text-sm text-black bg-gray-100 placeholder-gray-500 border border-gray-200
        rounded-md py-2 pl-10 focus:bg-gray-200 focus:text-blue-dark
        focus:placeholder-gray-400 outline-none;
      &:focus {
        transition: all 0.3s ease-in-out;
        width: 100%;
      }
    }
  }
  .user-actions {
    .btn {
      @apply w-1/2 flex items-center justify-center font-bold rounded-full;
      &.sign-in {
        @apply text-gray-400;
      }
      &.login {
        @apply text-white rounded;
        background: linear-gradient(160deg, $baby_blue 25%, $mid_blue 80%, $dark_blue 100%);
      }
      padding: 0.3rem;
    }
  }
}
</style>
