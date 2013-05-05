var engine = require('text_based_adventure_engine');
var player = new engine.Player();



startRoom = new engine.Room({ name : 'bunk room', description : 'a cramped little room, the walls appear to be a dark and metallic, there\'s a dim dripping sound in the distance' });
startRoom.addItem( new engine.Dice(), new engine.Clock(), new engine.Television() );
corridor = new engine.Room({ name : 'corridor', description : 'a long dimly lit corridor' });
atrium = new engine.Room({ name : 'atrium', description : 'a cavenous atrium, poorly lit. Above you is a huge rounded skylight'  });
atrium.addItem();

engine.Door.link( startRoom, corridor, { name : 'steel door', description : 'a steel door, with a metal flap at eye level, slightly ajar' } );
engine.Door.link( corridor, atrium, { name : 'double door', description : 'a set of sliding metal doors' } );

startRoom.addItem( player );

player.see('You slowly open your eyes. Your in a dark cramped bunk.');

engine.Shell.attachPlayerToShell( player );

