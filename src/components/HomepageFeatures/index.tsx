import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Master Legacy Code',
    Svg: require('@site/static/img/mountain.svg').default,
    description: (
      <>
        Fearlessly untangle your gnarliest codebases, step by step
      </>
    ),
  },
  {
    title: 'AI-Guided',
    Svg: require('@site/static/img/robot-svgrepo-com.svg').default,
    description: (
      <>
        Enjoy the reliability of deterministic tools combined with the convenience of generative AI suggestions
      </>
    ),
  },
  {
    title: 'Provable Refactoring',
    Svg: require('@site/static/img/microscope.svg').default,
    description: (
      <>
        Use verified techniques to improve code without changing behavior
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
