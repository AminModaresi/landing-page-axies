<template>
  <section class="navbar hidden">
    <div
      class="
        container
        flex
        justify-between
        items-center
        pt-10
        pb-2
        px-6
        mx-auto
        border-b border-gray-700
      "
    >
      <div class="navbar-right flex items-center">
        <img
          src="../../assets/images/01_header/logo_dark.png"
          class="w-24 mr-5"
          alt=""
        />
        <nav class="nav">
          <ul class="nav-list flex list-none p-0 m-0">
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Home</a
              >
            </li>
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Explor</a
              >
            </li>
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Activeity</a
              >
            </li>
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Commuity</a
              >
            </li>
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Pages</a
              >
            </li>
            <li class="nav-list__item mx-5">
              <a href="" class="nav-list__item_link text-sm text-grey-300"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-left flex items-center">
        <div class="flex items-center mx-4">
          <FontAwesomeIcon icon="search" />
          <button class="btn btn-outline-purple text-xs ml-5">
            <FontAwesomeIcon icon="wallet" />
            <span class="ml-2"> Wallet Connect</span>
          </button>
        </div>
        <div class="flex items-center">
          <div class="team-item">
            <img
              class="w-4"
              src="../../assets/images/01_header/moon-2.png"
              alt=""
            />
          </div>
          <div class="team-item">
            <img class="w-4" src="../../assets/images/01_header/sun.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "../../assets/styles/navbar.scss";
</style>