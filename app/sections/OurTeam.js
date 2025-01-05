import Button from '../components/Button';
import SubFooter from '../components/SubFooter';
import TeamMember from '../components/TeamMember';

export default function MeetOurTeam() {
  return (
    <div
      className="w-full h-[170vh] md:h-[120vh]  flex flex-col items-center justify-start md:justify-evenly  bg-cover bg-center"
      style={{ backgroundImage: `url('/images/rayOfLight.svg')` }}
    >
      <span className="capitalize mb-4 md:block text-2xl md:text-5xl font-extrabold text-white">
        meet our team
      </span>

      <div className="md:flex gap-y-4 md:gap-y-0 w-full h-screen md:h-auto justify-center items-center md:justify-evenly mb-10">
        {/* Emily */}
        <TeamMember
          name="Emily Johnson"
          title="Creative Director"
          photo="/images/emily.svg"
          style="mt-8"
        >
          Building trust is the foundation of <br />
          every great partnership, and <br />
          understanding is its strongest pillar.
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
          Building trust is the foundation of <br />
          every great partnership, and <br />
          understanding is its strongest pillar.
        </TeamMember>
        <Button
          name={'Learn More'}
          style={
            'md:hidden mt-14 ml-10 px-6 lg:px-12 lg:text-3xl py-2 w-[30vw] tracking-widest '
          }
        />
      </div>
      <Button
        name={'Learn More'}
        style={
          'hidden md:block lg:text-3xl  md:w-[25vw] lg:w-[15vw] xl:w-[20vw] tracking-widest '
        }
      />
      <SubFooter />
    </div>
  );
}
