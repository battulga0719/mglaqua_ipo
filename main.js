import './style.scss'

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(intersect)

globalThis.Alpine = Alpine
globalThis.gsap = gsap

Alpine.start()