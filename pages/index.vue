<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="bg-[#E8F5F3] px-4 sm:px-6 py-16 relative z-10">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:w-1/2 mb-8 md:mb-0"
             v-motion
             :initial="{ opacity: 0, x: -50 }"
             :visible="{ opacity: 1, x: 0 }"
             :delay="200">
          <p class="text-gray-500 mb-4">Never stop learning</p>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Grow up your skills by online courses with Onlearning
          </h1>
          <div class="flex flex-wrap items-center gap-6 mb-8">
            <Button variant="secondary" rounded="full">
              Get Started
            </Button>
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <img v-for="i in 3" :key="i" src="/images/avatar1.png" class="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div class="flex text-yellow-400">★★★★★</div>
              <span class="text-gray-600">4.9/5</span>
            </div>
          </div>
          <div class="flex items-center gap-2 bg-white p-2 rounded-lg w-fit">
            <div class="bg-[#E8F5F3] p-2 rounded">
              <MessageSquare class="w-5 h-5 text-[#20B486]" />
            </div>
            <div>
              <span class="text-2xl font-bold">250k</span>
              <p class="text-sm text-gray-600">Enrolled Student</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2"
             v-motion
             :initial="{ opacity: 0, scale: 0.8 }"
             :visible="{ opacity: 1, scale: 1 }"
             :delay="400">
          <img src="/images/hero.png" alt="Student learning online" class="w-full float-animation" />
        </div>
      </div>
    </section>

    <!-- Popular Courses -->
    <section id="courses" class="py-16 relative z-0">
      <div class="container mx-auto px-4 sm:px-6">
        <h2 class="text-[#FF6636] text-3xl font-bold text-center mb-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="600">
          Popular Courses
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(course, index) in courses" 
               :key="course.id"
               class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="800 + (index * 100)">
            <div class="relative pb-[60%] overflow-hidden">
              <img 
                :src="course.image" 
                :alt="course.title"
                @error="handleImageError"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div class="p-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="flex -space-x-2">
                  <img v-for="i in 2" :key="i" src="/images/avatar2.png" class="w-6 h-6 rounded-full border-2 border-white" />
                </div>
                <span class="text-sm text-gray-600">{{ course.students }} Students</span>
              </div>
              <h3 class="font-bold mb-2">{{ course.title }}</h3>
              <div class="flex justify-between items-center">
                <span class="text-[#FF6636] font-bold">${{ course.price }}</span>
                <Button variant="primary">Enroll Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section id="categories" class="py-16 bg-gray-50 relative z-0">
      <div class="container mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-bold text-center mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1000">
          Course Categories
        </h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
           v-motion
           :initial="{ opacity: 0, y: 20 }"
           :visible="{ opacity: 1, y: 0 }"
           :delay="1100">
          Onlearning is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(category, index) in categories" 
               :key="category.id"
               class="text-center hover-lift"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="1200 + (index * 100)">
            <div :class="`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${category.bgColor}`">
              <component :is="category.icon" class="w-10 h-10" :class="category.iconColor" />
            </div>
            <h3 class="font-bold mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 text-sm">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Student ID -->
    <section id="student-id" class="py-16 relative z-0">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }"
               :delay="1400">
            <h2 class="text-3xl font-bold mb-8">Get Student ID card</h2>
            <ul class="space-y-4">
              <li v-for="benefit in benefits" 
                  :key="benefit"
                  class="flex items-start gap-4">
                <div class="w-6 h-6 rounded-full bg-[#E8F5F3] flex items-center justify-center mt-1">
                  <Check class="w-4 h-4 text-[#20B486]" />
                </div>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0 }"
               :delay="1600">
            <img src="/images/id-card.png" alt="Student ID Card" class="w-full hover-lift" />
          </div>
        </div>
      </div>
    </section>

    <!-- Staff Training -->
    <section id="staff-training" class="py-16 bg-gray-50 relative z-0">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-full md:w-1/2 order-2 md:order-1"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }"
               :delay="1800">
            <img src="/images/staff-training.png" alt="Staff Training" class="w-full hover-lift" />
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0 }"
               :delay="2000">
            <span class="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
              Training
            </span>
            <h2 class="text-3xl font-bold mb-8">Staff training</h2>
            <ul class="space-y-4">
              <li v-for="benefit in staffBenefits" 
                  :key="benefit"
                  class="flex items-start gap-4">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Check class="w-4 h-4 text-blue-600" />
                </div>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gift Cards -->
    <section id="gift-cards" class="py-16 relative z-0">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="bg-[#FF6636] text-white rounded-2xl p-8 sm:p-12">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2"
                 v-motion
                 :initial="{ opacity: 0, x: -50 }"
                 :visible="{ opacity: 1, x: 0 }"
                 :delay="2200">
              <h2 class="text-3xl font-bold mb-8">Why You should buy gift cards?</h2>
              <ul class="space-y-4 mb-8">
                <li v-for="reason in giftCardReasons" 
                    :key="reason"
                    class="flex items-center gap-4">
                  <Circle class="w-4 h-4" />
                  <span>{{ reason }}</span>
                </li>
              </ul>
              <Button variant="primary" class="bg-white text-[#FF6636]" rounded="full">
                Buy Now
              </Button>
            </div>
            <div class="w-full md:w-1/2"
                 v-motion
                 :initial="{ opacity: 0, x: 50 }"
                 :visible="{ opacity: 1, x: 0 }"
                 :delay="2400">
              <img src="/images/gift-card.png" alt="Gift Card" class="w-full hover-lift" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { MessageSquare, Check, Circle, Sparkle, Stethoscope, Trophy, Apple } from 'lucide-vue-next'
import Button from '~/components/ui/button.vue'

const courses = ref([
  {
    id: 1,
    title: 'Project Management Basic',
    price: 99,
    students: '1.5k',
    image: '/images/course1.png'
  },
  {
    id: 2,
    title: 'UI/UX Visual Professional',
    price: 199,
    students: '1.2k',
    image: '/images/course2.png'
  },
  {
    id: 3,
    title: 'The Future of Web Design',
    price: 149,
    students: '850',
    image: '/images/course3.png'
  },
  {
    id: 4,
    title: 'Advanced Development',
    price: 249,
    students: '950',
    image: '/images/course4.png'
  }
])

const categories = [
  {
    id: 1,
    name: 'Beauty',
    description: 'Our expert will teach you everything about beauty',
    icon: Sparkle,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    name: 'Medical',
    description: 'Get medical knowledge from our experts',
    icon: Stethoscope,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    id: 3,
    name: 'Sports',
    description: 'The finest sports coaches will teach you',
    icon: Trophy,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-500'
  },
  {
    id: 4,
    name: 'Nutrition',
    description: 'Get nutrition advice from our experts',
    icon: Apple,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-500'
  }
]

const benefits = [
  'You will get your ID card and many more benefits',
  'We will complete your ID card with the help of AI',
  'Teachers will study your syllabus and make skills at any time'
]

const staffBenefits = [
  'Teachers will get paid as they get more and more training from our expert',
  'Teachers will study your syllabus and make skills at any time'
]

const giftCardReasons = [
  'Because you can get high discount from it and high offers',
  'Because you can get high discount from it and high offers',
  'Because you can get high discount from it and high offers'
]

const handleImageError = (e) => {
  e.target.src = '/images/placeholder.png'
}

onMounted(() => {
  nextTick(() => {
    courses.value = [...courses.value]
  })
})
</script>

<style scoped>
.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Ensure smooth transitions */
.v-motion {
  will-change: transform, opacity;
}
</style>

