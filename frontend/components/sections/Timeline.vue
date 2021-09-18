<template>
  <section id="timeline" class="py-16">
    <v-container>
      <template>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4 ${year.color}--text`"
              >
                {{ year.title }}
              </h2>
              <div class="black--text">
                {{ year.info }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </template>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: 'orange',
          year: '1971',
          title: 'CBS Is Established',
          info:
            'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.',
        },
        {
          color: 'orange',
          year: '1980',
          title: 'CBS Diversifies',
          info:
            'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.',
        },
        {
          color: 'orange',
          year: '1990',
          title: 'CBS gains big clients',
          info:
            'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.',
        },
        {
          color: 'orange',
          year: '2000',
          title: 'Where we are Now',
          info:
            'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.',
        },
      ],
    }
  },
}
</script>
