<template>
  <div class="flex min-h-screen">
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div
        class="flex items-center justify-center p-4 border-b border-gray-200"
      >
        <a
          href="./skrypt_repetytorium.pdf"
          class="flex items-center space-x-2"
          target="_blank"
        >
          <i class="bi bi-file-earmark-pdf text-red-500 text-2xl"></i>
          <span>Skrypt</span>
        </a>
      </div>

      <nav class="flex-1 p-4">
        <div class="text-sm font-semibold text-gray-600 uppercase mb-2">
          Repetytorium z matematyki
        </div>

        <router-link
          to="/ulamek-potegi-pierwiastki"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">➗</span>
          <span class="ml-2">Ułamki, potęgi, pierwiastki</span>
        </router-link>

        <router-link
          to="/funkcja-liniowa-kwadratowa"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">📈</span>
          <span class="ml-2">Funkcja liniowa i kwadratowa</span>
        </router-link>

        <router-link
          to="/wielomiany-funkcja-wymierna"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">🔢</span>
          <span class="ml-2">Wielomiany i funkcja wymierna</span>
        </router-link>

        <router-link
          to="/trygonometria"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">📐</span>
          <span class="ml-2">Trygonometria</span>
        </router-link>

        <router-link
          to="/funkcja-wykladnicza"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">📊</span>
          <span class="ml-2">Funkcja wykładnicza</span>
        </router-link>

        <router-link
          to="/funkcja-logarytmiczna"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">📉</span>
          <span class="ml-2">Funkcja logarytmiczna</span>
        </router-link>

        <router-link
          to="/wektory"
          class="flex items-center p-2 text-gray-700 hover:bg-gray-100"
        >
          <span class="text-xl">↔️</span>
          <span class="ml-2">Wektory</span>
        </router-link>
      </nav>

      <div
        class="flex items-center justify-center p-4 border-t border-gray-200"
      >
        <a
          href="https://github.com/mihoow/studia"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-700"
        >
          <i class="bi bi-github text-xl"></i>
          <span>Kod źródłowy</span>
        </a>
      </div>
    </aside>

    <main class="flex-grow bg-gray-50">
      <div class="flex-1 p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style>
/* You can remove all existing styles as Tailwind CSS will handle the styling */
</style>
