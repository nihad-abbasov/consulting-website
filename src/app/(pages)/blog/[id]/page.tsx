import { BlogDetail } from '@/views/BlogDetail';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Digital Transformation',
    category: 'Technology',
    date: 'March 15, 2024',
    content: `
      <p>Digital transformation has become a critical imperative for businesses across all industries. In this article, we explore the key trends and strategies that are shaping the future of digital transformation.</p>
      
      <h2>The Evolution of Digital Transformation</h2>
      <p>Digital transformation has evolved from a simple technology upgrade to a comprehensive business strategy. Companies are now focusing on creating seamless digital experiences for their customers while optimizing internal processes.</p>
      
      <h2>Key Trends to Watch</h2>
      <ul>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Cloud Computing and Edge Computing</li>
        <li>Internet of Things (IoT)</li>
        <li>Blockchain Technology</li>
        <li>5G Networks</li>
      </ul>
      
      <h2>Best Practices for Implementation</h2>
      <p>Successful digital transformation requires a strategic approach. Here are some best practices to consider:</p>
      <ol>
        <li>Start with a clear vision and strategy</li>
        <li>Focus on customer experience</li>
        <li>Invest in employee training</li>
        <li>Leverage data analytics</li>
        <li>Ensure security and compliance</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The future of digital transformation is bright, with new technologies and strategies emerging every day. By staying informed and adopting a proactive approach, businesses can position themselves for success in the digital age.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Sarah Johnson',
      role: 'Digital Transformation Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    tags: ['Digital Transformation', 'Technology', 'Innovation', 'Business Strategy']
  },
  {
    id: 2,
    title: 'Strategic Planning for Business Growth',
    category: 'Business',
    date: 'March 10, 2024',
    content: `
      <p>Strategic planning is essential for sustainable business growth. In this article, we discuss the key components of an effective strategic planning process.</p>
      
      <h2>The Importance of Strategic Planning</h2>
      <p>Strategic planning helps businesses align their resources with their long-term goals and objectives. It provides a roadmap for growth and helps organizations stay competitive in their markets.</p>
      
      <h2>Key Components of Strategic Planning</h2>
      <ul>
        <li>Vision and Mission Statements</li>
        <li>SWOT Analysis</li>
        <li>Goal Setting</li>
        <li>Action Plans</li>
        <li>Performance Metrics</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successful implementation of strategic plans requires careful consideration of several factors:</p>
      <ol>
        <li>Leadership commitment</li>
        <li>Employee engagement</li>
        <li>Resource allocation</li>
        <li>Regular monitoring and evaluation</li>
        <li>Adaptation to changing circumstances</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Strategic planning is an ongoing process that requires continuous attention and adjustment. By following these guidelines, businesses can create effective strategic plans that drive growth and success.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Michael Chen',
      role: 'Business Strategy Consultant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    tags: ['Business Strategy', 'Growth', 'Planning', 'Leadership']
  },
  {
    id: 3,
    title: 'Innovation in the Modern Workplace',
    category: 'Innovation',
    date: 'March 5, 2024',
    content: `
      <p>Innovation has become a critical driver of success in today's rapidly evolving business landscape. In this article, we explore how organizations can foster a culture of innovation and leverage it for competitive advantage.</p>
      
      <h2>The Role of Innovation in Business Success</h2>
      <p>Innovation is no longer just about creating new products or services. It's about transforming how businesses operate, engage with customers, and create value in the marketplace.</p>
      
      <h2>Key Elements of an Innovative Workplace</h2>
      <ul>
        <li>Encouraging creative thinking and experimentation</li>
        <li>Building diverse and inclusive teams</li>
        <li>Creating spaces for collaboration and ideation</li>
        <li>Implementing agile methodologies</li>
        <li>Fostering a culture of continuous learning</li>
      </ul>
      
      <h2>Strategies for Fostering Innovation</h2>
      <p>To create an environment that nurtures innovation, organizations should consider these key strategies:</p>
      <ol>
        <li>Empower employees to take calculated risks</li>
        <li>Provide resources and time for creative projects</li>
        <li>Encourage cross-functional collaboration</li>
        <li>Recognize and reward innovative thinking</li>
        <li>Create channels for idea sharing and feedback</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Building an innovative workplace is an ongoing journey that requires commitment, resources, and a willingness to embrace change. By implementing these strategies, organizations can create an environment where innovation thrives and drives sustainable growth.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Emily Rodriguez',
      role: 'Innovation Specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    tags: ['Innovation', 'Workplace', 'Culture', 'Business Growth']
  }
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
} 