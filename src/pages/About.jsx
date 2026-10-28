import { useEffect, useState } from 'react'
import { ArrowRight, ClipboardList, Map, MessageSquareText, ReceiptText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { aboutStatistics } from '../data/aboutStatistics.js'

const benefits = [
  {
    icon: <ClipboardList aria-hidden="true" />,
    title: 'Personalised Travel Planning',
    text: 'Discuss your destination, travel dates, group size, and preferences with us to explore travel options suited to your requirements.',
  },
  {
    icon: <ReceiptText aria-hidden="true" />,
    title: 'Clear Tariff Discussions',
    text: 'Understand the applicable travel charges, vehicle options, and additional costs by discussing your requirements with us before confirming your trip.',
  },
  {
    icon: <Map aria-hidden="true" />,
    title: 'Options for Different Journeys',
    text: 'Explore enquiries for local travel, outstation journeys, and tour packages based on your destination and travel needs.',
  },
  {
    icon: <MessageSquareText aria-hidden="true" />,
    title: 'Simple Enquiry Process',
    text: 'Reach out to discuss your plans, request a quotation, and clarify the details needed before finalising your travel arrangements.',
  },
]

function StatisticCard({ statistic }) {
  const [count, setCount] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
      ? statistic.value
      : 0
  ))

  useEffect(() => {
    if (typeof statistic.value !== 'number') return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined

    let frameId
    let observer
    const element = document.getElementById(`about-stat-${statistic.id}`)
    if (!element) return undefined

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      const start = performance.now()
      const duration = 900
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const easedProgress = 1 - ((1 - progress) ** 3)
        setCount(Math.round(statistic.value * easedProgress))
        if (progress < 1) frameId = window.requestAnimationFrame(animate)
      }

      frameId = window.requestAnimationFrame(animate)
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => {
      observer?.disconnect()
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [statistic.id, statistic.value])

  return (
    <article className="about-stat-card" id={`about-stat-${statistic.id}`}>
      <p className="about-stat-value" aria-label={`${statistic.value}${statistic.suffix}`}>
        {count.toLocaleString()}{statistic.suffix}
      </p>
      <h3>{statistic.label}</h3>
    </article>
  )
}

function About() {
  return (
    <div className="inner-page about-page">
      <section className="about-introduction" aria-labelledby="about-title">
        <div className="page-width about-introduction-grid">
          <div className="about-introduction-copy">
            <p className="eyebrow">A JOURNEY THAT STARTS WITH A PLAN</p>
            <h1 id="about-title">About Selva Tours and Travels</h1>
            <span className="about-gold-rule" aria-hidden="true" />
            <div className="about-prose">
              <p>Every journey begins with a purpose, and at Selva Tours and Travels, we aim to make that journey easier to plan.</p>
              <p>Founded in 2024 by Arun Kumar, Selva Tours and Travels was established with the goal of helping travellers explore convenient travel options from Coimbatore. From local journeys to outstation trips and tour enquiries, our focus is on understanding each traveller&apos;s requirements and helping them plan accordingly.</p>
              <p>As a growing travel business, we believe that good service starts with clear communication, thoughtful planning, and an understanding of what each journey requires.</p>
              <p>Whether you are travelling for personal commitments, a family getaway, or a longer trip, Selva Tours and Travels invites you to explore your options and plan your next journey with us.</p>
            </div>
            <div className="about-founder">
              <span className="about-founder-mark" aria-hidden="true">AK</span>
              <div>
                <p className="about-founder-name">Arun Kumar</p>
                <p className="about-founder-role">Founder, Selva Tours and Travels</p>
              </div>
              <span className="about-established">Established in 2024</span>
            </div>
          </div>
          <figure className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85"
              alt="A scenic road journey through a lush landscape"
              loading="lazy"
            />
            <figcaption><span aria-hidden="true" /> Travel begins with a destination</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-statistics section" aria-labelledby="about-statistics-title">
        <div className="page-width">
          <div className="about-section-heading">
            <p className="eyebrow">A THOUGHTFUL START</p>
            <h2 id="about-statistics-title">Our Journey at a Glance</h2>
            <p>Since our establishment in 2024, we have been building Selva Tours and Travels around a simple goal: helping people plan their journeys with clarity and convenience.</p>
          </div>
          <div className="about-stat-grid">
            {aboutStatistics.map((statistic) => (
              <StatisticCard statistic={statistic} key={statistic.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-why-section section page-width" aria-labelledby="about-why-title">
        <div className="about-section-heading">
          <p className="eyebrow">MADE AROUND YOUR TRAVEL NEEDS</p>
          <h2 id="about-why-title">Why Choose Selva Tours and Travels?</h2>
          <p>Every traveller has different plans, preferences, and destinations. We focus on helping you explore suitable travel options through clear communication and straightforward travel planning.</p>
        </div>
        <div className="about-benefit-grid">
          {benefits.map((benefit) => (
            <article className="about-benefit-card" key={benefit.title}>
              <span className="about-benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <aside className="about-cta" aria-labelledby="about-cta-title">
          <div>
            <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
            <h3 id="about-cta-title">Let&apos;s Plan Your Next Journey</h3>
            <p>Have a destination in mind? Get in touch with Selva Tours and Travels to discuss your travel requirements.</p>
          </div>
          <div className="about-cta-actions">
            <Link className="button button-gold" to="/contact">Contact Us <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="button button-outline" to="/tour-packages">Explore Tour Packages <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default About
