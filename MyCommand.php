// src/Command/MyCommand.php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MyCommand extends Command
{
    protected static $defaultName = 'app:mi-comando';

    protected function configure()
    {
        $this->setDescription('Mi primer comando de Symfony');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('¡Hola, mundo!');
        return Command::SUCCESS;
    }
}
