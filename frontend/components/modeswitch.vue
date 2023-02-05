<template>
    <label>
        <input ref="target" @change="modeChanged($event)" class='toggle-checkbox' type='checkbox'>
        <div class='toggle-slot'>
            <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false">
                    <SunIcon class="h-full w-full" aria-hidden="true" />
                </div>
            </div>
            <div class='toggle-button'></div>
            <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false">
                    <MoonIcon class="h-full w-full" aria-hidden="true" />
                </div>
            </div>
        </div>
    </label>

</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
const colorMode = useColorMode()
if(colorMode.preference == 'dark'){
    ref('target').value = true
    console.log(ref('target').checked)
}
function modeChanged(e:any){
    if(e.target.checked){
        colorMode.preference = 'dark'
    }else{
        colorMode.preference = 'light'
    }
}
</script>

<style scoped>
.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  position: relative;
  cursor: pointer;
  height: 25px;
  width: 50px;
  border: 1px solid #e4e7ec93;
  border-radius: 10em;
  background-color: white;
  box-shadow: 0px 1px 2px #999faa6e;
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translate(26px, 1px);
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.75em #f89e16;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.75em white;
  transform: translate(1px, 2px);
}

.sun-icon {
  position: absolute;
  height: 20px;
  width: 20px;
  color: #f89e16;
}

.sun-icon-wrapper {
  position: absolute;
  height: 20px;
  width: 20px;
  opacity: 1;
  transform: translate(1px, 1px) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  position: absolute;
  height: 20px;
  width: 20px;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 20px;
  width: 20px;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(26px, 1px) rotate(-15deg);
}
</style>