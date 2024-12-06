<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="bg-[#E8F5F3] px-4 sm:px-6 py-4 sticky top-0 z-50 transition-all duration-300"
         :class="{ 'shadow-md': scrolled }">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo.png" alt="Onlearn" class="h-8" />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-8">
          <a v-for="item in navItems" 
             :key="item.name"
             :href="`#${item.id}`"
             class="text-gray-600 hover:text-gray-900 transition-colors"
             :class="{ 'text-[#20B486] font-semibold': activeSection === item.id }"
             @click="scrollToSection(item.id)">
            {{ item.name }}
          </a>
        </div>
        
        <div class="hidden md:flex items-center gap-4">
          <Button variant="text" class="hover:shadow-lg transition-shadow duration-300">Sign In</Button>
          <Button variant="primary" rounded="full" class="hover:shadow-lg transition-shadow duration-300">Sign Up</Button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden">
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" 
         class="md:hidden bg-[#E8F5F3] px-4 py-2 fixed w-full z-40"
         v-motion
         :initial="{ opacity: 0, y: -20 }"
         :enter="{ opacity: 1, y: 0 }">
      <div class="space-y-4">
        <a v-for="item in navItems" 
           :key="item.name"
           :href="`#${item.id}`"
           @click="scrollToSectionMobile(item.id)"
           class="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
           :class="{ 'text-[#20B486] font-semibold': activeSection === item.id }">
          {{ item.name }}
        </a>
        <div class="pt-4 space-y-2">
          <Button variant="text" class="w-full justify-center hover:shadow-lg transition-shadow duration-300">Sign In</Button>
          <Button variant="primary" class="w-full justify-center hover:shadow-lg transition-shadow duration-300" rounded="full">Sign Up</Button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer id="contact" class="bg-[#E8F5F3] pt-16 pb-8">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div>
            <img src="/images/logo.png" alt="Onlearn" class="h-8 mb-4" />
            <p class="text-gray-600 mb-4">
              Empowering minds through quality online education.
            </p>
            <div class="flex space-x-4">
              <a v-for="social in socials" 
                 :key="social.name" 
                 :href="social.link"
                 class="text-gray-600 hover:text-gray-900 transition-colors hover:shadow-lg hover:scale-110 transform duration-300">
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="link in quickLinks" :key="link">
                <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Categories -->
          <div>
            <h3 class="font-bold mb-4">Categories</h3>
            <ul class="space-y-2">
              <li v-for="category in footerCategories" :key="category">
                <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contact Form -->
          <div>
            <h3 class="font-bold mb-4">Contact Us</h3>
            <form @submit.prevent="handleContact" class="space-y-4">
              <input 
                v-model="contactForm.email"
                type="email" 
                placeholder="Email address" 
                class="w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none"
                required
              />
              <textarea 
                v-model="contactForm.message"
                placeholder="Your message" 
                rows="3"
                class="w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none"
                required
              ></textarea>
              <Button 
                type="submit" 
                variant="primary"
                class="w-full hover:shadow-lg transition-shadow duration-300"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </Button>
            </form>
            <div v-if="showConfirmation" class="mt-4 text-green-600">
              Your message has been received. We'll get back to you soon.
            </div>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {{ new Date().getFullYear() }} Onlearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-vue-next'
import Button from '~/components/ui/button.vue'
import { useMotion } from '@vueuse/motion'

const isMobileMenuOpen = ref(false)
const scrolled = ref(false)
const isSubmitting = ref(false)
const showConfirmation = ref(false)
const activeSection = ref('home')

const contactForm = ref({
  email: '',
  message: ''
})

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Courses', id: 'courses' },
  { name: 'Categories', id: 'categories' },
  { name: 'Contact', id: 'contact' }
]

const socials = [
  { name: 'Facebook', icon: Facebook, link: '#' },
  { name: 'Twitter', icon: Twitter, link: '#' },
  { name: 'Instagram', icon: Instagram, link: '#' }
]

const quickLinks = ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service']
const footerCategories = ['Development', 'Business', 'Design', 'Marketing']

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const motion = useMotion(element)
    motion.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}

const scrollToSectionMobile = (id) => {
  scrollToSection(id)
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  // Update active section based on scroll position
  const sections = navItems.map(item => document.getElementById(item.id))
  const currentSection = sections.find(section => {
    if (section) {
      const rect = section.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom > 100
    }
    return false
  })

  if (currentSection) {
    activeSection.value = currentSection.id
  }
}

const handleContact = async () => {
  isSubmitting.value = true
  try {
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    contactForm.value = { email: '', message: '' }
    showConfirmation.value = true
    setTimeout(() => {
      showConfirmation.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error (e.g., show error message to user)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>

