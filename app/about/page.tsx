import React from "react";
import Image from "next/image";
import { Heart, Globe, Calendar, Users, Award, Shield, CheckCircle, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingGlassCard from "@/components/FloatingGlassCard";
import Link from "next/link";

const timeline = [
  { year: "2015", event: "Founded in Geneva with 3 team members", milestone: "Organization established" },
  { year: "2018", event: "Expanded to 25 countries, 1M lives impacted", milestone: "Global expansion begins" },
  { year: "2021", event: "Launched 100+ active programs globally", milestone: "Scale achieved" },
  { year: "2024", event: "Reached 2.5M lives, 98% donor satisfaction", milestone: "Excellence recognized" },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Executive Director",
    background: "Former UNICEF Director with 15+ years in humanitarian work",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "Chief Operations Officer",
    background: "Former World Bank consultant specializing in development programs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Dr. Amina Hassan",
    role: "Director of Programs",
    background: "PhD in International Development, field experience in 12 countries",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  }
];

const financials = [
  { year: "2023", revenue: 12500000, expenses: 11800000, admin: 5.2 },
  { year: "2022", revenue: 9800000, expenses: 9350000, admin: 4.8 },
  { year: "2021", revenue: 7500000, expenses: 7150000, admin: 5.1 }
];

export default function AboutPage() {
  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heart className="w-16 h-16 text-elegant-rose mx-auto mb-6" fill="currentColor" />
          <h1 className="clamp-text-5xl font-bold text-rich-cocoa mb-6">Our Impact Story</h1>
          <p className="clamp-text-xl text-soft-mauve-gray max-w-3xl mx-auto text-balance mb-8">
            Building a legacy of transparent, impactful humanitarian work since 2015. Every dollar works harder for communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="magnetic-button px-8 py-4">
              Support Our Mission
            </Link>
            <Link href="/programs" className="px-8 py-4 bg-white/70 text-soft-mauve-gray rounded-full hover:bg-white/80 transition-all font-medium">
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <FloatingGlassCard className="text-center space-y-4 p-6">
            <div className="flex justify-center"><Globe className="w-8 h-8 text-elegant-rose" /></div>
            <div className="clamp-text-4xl font-bold text-elegant-rose">
              <AnimatedCounter endValue={120} suffix="+" />
            </div>
            <div className="text-soft-mauve-gray text-sm">Countries Reached</div>
          </FloatingGlassCard>

          <FloatingGlassCard className="text-center space-y-4 p-6">
            <div className="flex justify-center"><Heart className="w-8 h-8 text-elegant-rose" fill="currentColor" /></div>
            <div className="clamp-text-4xl font-bold text-elegant-rose">
              <AnimatedCounter endValue={2.5} suffix="M+" />
            </div>
            <div className="text-soft-mauve-gray text-sm">Lives Impacted</div>
          </FloatingGlassCard>

          <FloatingGlassCard className="text-center space-y-4 p-6">
            <div className="flex justify-center"><Award className="w-8 h-8 text-champagne-gold" /></div>
            <div className="clamp-text-4xl font-bold text-elegant-rose">
              <AnimatedCounter endValue={98} suffix="%" />
            </div>
            <div className="text-soft-mauve-gray text-sm">Program Success Rate</div>
          </FloatingGlassCard>

          <FloatingGlassCard className="text-center space-y-4 p-6">
            <div className="flex justify-center"><Shield className="w-8 h-8 text-green-600" /></div>
            <div className="clamp-text-4xl font-bold text-elegant-rose">
              <AnimatedCounter endValue={5.1} suffix="%" />
            </div>
            <div className="text-soft-mauve-gray text-sm">Admin Costs</div>
          </FloatingGlassCard>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <FloatingGlassCard className="p-8">
              <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-6">Our Mission</h2>
              <p className="text-soft-mauve-gray leading-relaxed mb-6">
                To create sustainable change in the world's most vulnerable communities by delivering
                transparent, effective humanitarian programs that empower people to build better futures.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-rich-cocoa">Core Values</h3>
                <ul className="space-y-2 text-soft-mauve-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Transparency in all operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Community-led solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Maximum impact per dollar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Accountability to donors and beneficiaries</span>
                  </li>
                </ul>
              </div>
            </FloatingGlassCard>
          </div>

          <div className="space-y-8">
            <FloatingGlassCard className="p-8">
              <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-6">Why We Exist</h2>
              <div className="space-y-4 text-soft-mauve-gray leading-relaxed">
                <p>
                  Too many humanitarian organizations lose sight of their mission amid bureaucracy and inefficiency.
                  We exist to prove that transparency, effectiveness, and scale can coexist.
                </p>
                <p>
                  Every decision we make prioritizes impact over optics. Every program is designed with
                  community input and evaluated by independent experts.
                </p>
                <p>
                  We believe donors deserve to know exactly how their generosity creates change,
                  and communities deserve partners who deliver on their promises.
                </p>
              </div>
            </FloatingGlassCard>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="clamp-text-4xl font-bold text-rich-cocoa mb-4">Leadership Team</h2>
            <p className="text-soft-mauve-gray max-w-2xl mx-auto">
              Experienced professionals dedicated to humanitarian excellence and transparent operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FloatingGlassCard key={index} className="p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-bold text-rich-cocoa mb-1">{member.name}</h3>
                <p className="text-elegant-rose font-medium text-sm mb-3">{member.role}</p>
                <p className="text-soft-mauve-gray text-sm leading-relaxed">{member.background}</p>
              </FloatingGlassCard>
            ))}
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="clamp-text-4xl font-bold text-rich-cocoa mb-4">Financial Transparency</h2>
            <p className="text-soft-mauve-gray max-w-2xl mx-auto">
              We maintain industry-leading efficiency, ensuring maximum impact from every donation.
            </p>
          </div>

          <FloatingGlassCard className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/30">
                    <th className="text-left py-3 font-semibold text-rich-cocoa">Year</th>
                    <th className="text-right py-3 font-semibold text-rich-cocoa">Revenue</th>
                    <th className="text-right py-3 font-semibold text-rich-cocoa">Program Expenses</th>
                    <th className="text-right py-3 font-semibold text-rich-cocoa">Admin %</th>
                  </tr>
                </thead>
                <tbody className="text-soft-mauve-gray">
                  {financials.map((year, index) => (
                    <tr key={index} className="border-b border-white/20">
                      <td className="py-3 font-medium">{year.year}</td>
                      <td className="py-3 text-right">${year.revenue.toLocaleString()}</td>
                      <td className="py-3 text-right">${year.expenses.toLocaleString()}</td>
                      <td className="py-3 text-right">{year.admin}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-soft-mauve-gray mt-4">
              * All figures in USD. Financials audited annually by independent CPA firm.
              Admin percentage includes all overhead costs.
            </p>
          </FloatingGlassCard>
        </div>

        {/* Timeline */}
        <FloatingGlassCard className="max-w-4xl mx-auto p-8 mb-20">
          <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-elegant-rose rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-elegant-rose/30 mt-4" />}
                </div>
                <div className="flex-1 pt-3">
                  <div className="font-bold text-rich-cocoa mb-1">{item.milestone}</div>
                  <div className="text-soft-mauve-gray">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </FloatingGlassCard>

        {/* Global Reach Map Placeholder */}
        <div className="text-center mb-20">
          <FloatingGlassCard className="p-12">
            <Globe className="w-16 h-16 text-elegant-rose mx-auto mb-6" />
            <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-4">Global Impact Network</h2>
            <p className="text-soft-mauve-gray max-w-2xl mx-auto mb-8">
              Operating in 120+ countries through partnerships with local organizations,
              ensuring culturally appropriate and sustainable solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-elegant-rose">120+</div>
                <div className="text-sm text-soft-mauve-gray">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-elegant-rose">500+</div>
                <div className="text-sm text-soft-mauve-gray">Local Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-elegant-rose">150+</div>
                <div className="text-sm text-soft-mauve-gray">Active Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-elegant-rose">24/7</div>
                <div className="text-sm text-soft-mauve-gray">Monitoring</div>
              </div>
            </div>
          </FloatingGlassCard>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <FloatingGlassCard className="p-12 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-elegant-rose mx-auto mb-6" fill="currentColor" />
            <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-4">Join Our Mission</h2>
            <p className="text-soft-mauve-gray mb-8">
              Your support enables us to continue delivering life-changing programs worldwide.
              Together, we can create a world where every person has the opportunity to thrive.
            </p>
            <Link href="/donate" className="magnetic-button px-8 py-4 text-lg">
              Make a Difference Today
            </Link>
          </FloatingGlassCard>
        </div>
      </div>
    </div>
  );
}
