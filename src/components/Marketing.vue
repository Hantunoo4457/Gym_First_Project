<template>
    <div>
        <h1 data-aos="fade-right" data-aos-duration="1000" class="text-xl sm:text-2xl text-center font-bold mt-8 mb-4">YOUR SUCCESS MADE SIMPLER</h1>
        <p  data-aos="fade-right" data-aos-duration="1000" class="text-center text-xl mb-2">Enjoy proven results already achieved by over 20,000 clubs worldwide</p>
        <div class="sm:flex sm:justify-center">
            <div class="sm:w-1/6 m-6" data-aos="zoom-in" data-aos-duration="1000" v-for="part in parts" :key="part.heading">
                <img class="sm:w-full w-1/2 sm:ml-0 ml-[25%]" :src="part.image" alt="">
                <h1 class="text-center text-xl mb-2">{{ part.heading }}</h1>
                <p class="text-center mt-2">{{ part.para }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                parts : [
                    {
                        image : './images/club1_0.png',
                        heading : 'MORE MEMBERS',
                        para : `6/10 members* say a club's group fitness timetable influences their decision join.`
                    },
                    {
                        image : './images/club1_0.png',
                        heading : 'MORE ENGAGEMENT',
                        para : `Over 85% of group exercise participants* visit their club at least twice a week.`
                    },
                    {
                        image : './images/club1_0.png',
                        heading : 'MORE REFERRALS',
                        para : `95% of members who do LES MILLS® classes* would recommend them to others.`
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>