<template>
    <transition
        v-if="!type"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <slot></slot>
    </transition>
    <transition-group
        v-else
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <slot></slot>
    </transition-group>
</template>

<script>
    export default {
        name: "zoom-in",
        props: {
            type: {
                type: String,
                default() {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
