import Button from '../components/Button';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import TeamMember from '../components/TeamMember';

export default function MeetOurTeam() {
  return (
    <div
      className="w-full h-[200vh] md:h-[140vh]  flex flex-col items-center justify-start md:justify-between  bg-cover bg-center"
      style={{ backgroundImage: `url('/images/rayOfLight.svg')` }}
    >
      <span className="capitalize mb-4 md:block text-2xl md:text-5xl font-extrabold text-white">
        meet our team
      </span>

      <div className="md:flex gap-y-4 md:gap-y-0 w-full  md:h-auto justify-center items-center md:justify-evenly mb-10">
        {/* Emily */}
        <TeamMember
          name="Emily Johnson"
          title="Creative Director"
          photo="/images/emily.svg"
          style="mt-8"
        >
          Great strategy is not just planning, it is <br />
          creating pathways for the impossible to <br />
          become achievable.
        </TeamMember>

        {/* Agostino */}
        <TeamMember
          name="Agostino H. Ruggiero"
          title="Head of Client Relationship"
          photo="/images/nino.svg"
          style="mt-8"
        >
          Building trust is the foundation of <br />
          every great partnership, and <br />
          understanding is its strongest pillar.
        </TeamMember>

        {/* Isabel */}
        <TeamMember
          name="Isabel Martinez"
          title="Marketing Specialist"
          photo="/images/isabel.svg"
          style="mt-8"
        >
          Creativity is the power to connect the <br />
          seemingly unconnected and turn ideas <br />
          into impactful realities.
        </TeamMember>
      </div>
      <Button
        name={'Learn More'}
        style={
          'hidden md:block md:text-xl lg:text-2xl  md:w-[25vw] lg:w-[23vw] xl:w-[15vw] 2xl:w-[15vw] tracking-widest md:py-3 2xl:py-4'
        }
      />
    </div>
  );
}
