import { ServiceDetail } from '@/views/ServiceDetail';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const services = [
  {
    id: 1,
    title: 'Strategic Consulting',
    description: 'Transform your business with our strategic consulting services. We help you identify opportunities, overcome challenges, and achieve sustainable growth.',
    features: [
      'Market analysis and research',
      'Competitive strategy development',
      'Business model optimization',
      'Performance metrics and KPIs',
      'Risk assessment and mitigation'
    ],
    benefits: [
      'Increased market share',
      'Improved operational efficiency',
      'Enhanced competitive advantage',
      'Better decision-making processes',
      'Sustainable growth strategies'
    ],
    process: {
      title: 'Our Strategic Consulting Process',
      steps: [
        'Initial consultation and needs assessment',
        'Market research and data analysis',
        'Strategy development and planning',
        'Implementation roadmap creation',
        'Ongoing support and optimization'
      ]
    }
  },
  {
    id: 2,
    title: 'Digital Transformation',
    description: 'Embrace the future with our digital transformation services. We help businesses modernize their operations and leverage technology for growth.',
    features: [
      'Technology assessment',
      'Digital strategy development',
      'Process automation',
      'Cloud solutions implementation',
      'Data analytics integration'
    ],
    benefits: [
      'Improved operational efficiency',
      'Enhanced customer experience',
      'Reduced operational costs',
      'Increased scalability',
      'Better data-driven decisions'
    ],
    process: {
      title: 'Our Digital Transformation Process',
      steps: [
        'Digital maturity assessment',
        'Technology roadmap creation',
        'Solution design and planning',
        'Implementation and integration',
        'Training and support'
      ]
    }
  },
  {
    id: 3,
    title: 'Financial Advisory',
    description: 'Navigate complex financial landscapes with our expert advisory services. We provide comprehensive financial solutions for sustainable growth.',
    features: [
      'Financial planning and analysis',
      'Investment strategy development',
      'Risk management solutions',
      'Tax optimization strategies',
      'Mergers and acquisitions advisory'
    ],
    benefits: [
      'Improved financial performance',
      'Better risk management',
      'Optimized tax strategies',
      'Enhanced investment returns',
      'Strategic financial planning'
    ],
    process: {
      title: 'Our Financial Advisory Process',
      steps: [
        'Financial health assessment',
        'Goal setting and planning',
        'Strategy development',
        'Implementation and monitoring',
        'Regular review and adjustment'
      ]
    }
  }
];

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === parseInt(resolvedParams.id));

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
} 